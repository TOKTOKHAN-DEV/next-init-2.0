import { isBase64Img } from '../is-base64-img';

describe('isBase64Img', () => {
  it('returns true when input is a base64 string of an image', () => {
    const base64 = 'data:image/png;base64,iVBORw0KGg...';
    const result = isBase64Img(base64);
    expect(result).toBe(true);
  });

  it('returns false when input is a base64 string of a non-image file', () => {
    const base64 = 'data:application/json;base64,eyJzd...';
    const result = isBase64Img(base64);
    expect(result).toBe(false);
  });

  it('returns false when input is not a string', () => {
    const base64 = 12345;
    const result = isBase64Img(base64);
    expect(result).toBe(false);
  });
});
