declare global {
  interface Window {
    fbq: any;
    gtag: any;
    kakaoPixel: any;
  }

  interface String {
    example(): String;
    formatPhone(): String;
  }

  interface Number {
    example(): Number;
  }

  interface Function {
    example(): Function;
  }

  interface Boolean {
    example(): Boolean;
  }
}

export {};
