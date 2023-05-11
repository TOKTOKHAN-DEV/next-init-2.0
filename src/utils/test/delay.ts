export const delay = <T>(data: T, isError?: boolean, de = 2000): Promise<T> =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (isError) {
        return rej('error');
      }
      res(data);
    }, de);
  });
