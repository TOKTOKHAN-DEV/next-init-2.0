import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { tokenStorage } from '@/utils/web-storage/token';

import instance from '../instance';

const REQUEST_DELAY = 0;
const TEST_REQUEST_COUNT = 100;

const token1 = { access: 'access1', refresh: 'refresh1' }; // expired
const token2 = { access: 'access2', refresh: 'refresh2' };

const handler = [
  rest.get('/user', (req, res, ctx) => {
    // 리프레시 된 토큰일 때만 200 응답.
    if (req.headers.get('Authorization') === `Bearer ${token2.access}`) {
      return res(
        ctx.delay(REQUEST_DELAY),
        ctx.status(200),
        ctx.json({ hello: 'world' }),
      );
    }
    return res(
      ctx.delay(REQUEST_DELAY),
      ctx.status(444),
      ctx.json({ hello: 'world' }),
    );
  }),
  rest.post('/v1/user/refresh/', async (req, res, ctx) => {
    const body = await req.json();
    // 첫번째 토큰의 리프레시 토큰일 때만 200 응답. 리프레시 요청을 재요청하게되면 에러
    if (body.refresh === token1.refresh) {
      return res(ctx.delay(REQUEST_DELAY), ctx.status(200), ctx.json(token2));
    }
    return res(ctx.delay(REQUEST_DELAY), ctx.status(400));
  }),
];

const server = setupServer(...handler);

describe('instance', () => {
  describe('interceptor', () => {
    describe('expired token (status: 444)', () => {
      beforeEach(() => {
        server.listen();
        tokenStorage?.remove();
      });
      describe('not found refresh-token', () => {
        it("throw Error 'not found refresh-token'", async () => {
          await expect(async () => {
            await instance({ method: 'GET', url: '/user' });
          }).rejects.toThrowError('not found refresh-token');
        });
      });
      describe('found refresh-token', () => {
        it('retry request with refresh', async () => {
          tokenStorage?.set(token1); // expired token
          const res = Promise.all(
            Array.from({ length: TEST_REQUEST_COUNT }).map(async () => {
              return (await instance({ method: 'GET', url: '/user' })).data;
            }),
          );
          await expect(res).resolves.toEqual(
            Array.from({ length: TEST_REQUEST_COUNT }).fill({ hello: 'world' }),
          );
        });
      });
    });
  });
});
