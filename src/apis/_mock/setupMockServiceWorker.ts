import {
  DefaultRequestBody,
  MockedRequest,
  RestHandler,
  setupWorker,
} from 'msw';
import { setupServer } from 'msw/node';

import { CONFIG } from '@config';

type Args = {
  /**
   * @see https://mswjs.io/docs/getting-started/mocks/rest-api
   */
  handlers: Handlers;
  /** 서비스 워커의 구동 여부 (server: node-server, client: web-app) */
  condition?: {
    server?: 'on' | 'off';
    client?: 'on' | 'off';
  };
};
type Handlers = RestHandler<MockedRequest<DefaultRequestBody>>[];

function setUpMockServiceWorker({ handlers, condition }: Args) {
  const isProd = CONFIG.ENV === 'production';

  if (isProd) return;
  if (!handlers.length) return;

  const isServer = typeof window === 'undefined';
  const isClient = !isServer;

  const { server, client } = {
    server: 'on',
    client: 'on',
    ...condition,
  };

  if (isServer && server === 'on') {
    const serverWorker = setupServer(...handlers);
    serverWorker.listen();
    return;
  }
  if (isClient && client === 'on') {
    const clientWorker = setupWorker(...handlers);
    clientWorker.start();
  }
}
export default setUpMockServiceWorker;
