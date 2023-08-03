export const isBase64Img = (baseurl: unknown): baseurl is string => {
  if (typeof baseurl !== 'string') return false;
  const [meta] = baseurl.split(';');
  return meta.includes('data:image');
};
