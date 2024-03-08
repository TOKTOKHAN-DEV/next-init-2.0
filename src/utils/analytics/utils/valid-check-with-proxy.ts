type GaHandler = {
  get: (
    target: { [key: string]: (...args: any[]) => any },
    propKey: string,
  ) => (...args: any[]) => any;
};

const ANALYTICS_NAME = {
  gtag: 'Google Analytics',
  fbq: 'Meta(Facebook)',
  kakao: 'Kakao',
};

export const analyticsValidCheckHandler: GaHandler = {
  get: (target, propKey) => {
    const origMethod = target[propKey];
    return (...args) => {
      let isValid = false;
      if (typeof window !== 'undefined') {
        switch (propKey) {
          case 'gtag':
            isValid = typeof window.gtag === 'function';
            break;
          case 'fbq':
            isValid = typeof window.fbq === 'function';
            break;
          case 'kakao':
            isValid = typeof kakaoPixel === 'function';
            break;
          default:
            break;
        }
      }

      if (!isValid) {
        return console.warn(
          `${
            ANALYTICS_NAME[propKey as keyof typeof ANALYTICS_NAME]
          } Analytics is not initialized.`,
        );
      }
      return origMethod.apply(target, args);
    };
  },
};
