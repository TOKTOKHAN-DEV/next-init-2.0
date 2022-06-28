import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url('/fonts/Pretendard-Black.woff') format('woff');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url('/fonts/Pretendard-ExtraBold.woff') format('woff');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('/fonts/Pretendard-Bold.woff') format('woff');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url('/fonts/Pretendard-SemiBold.woff') format('woff');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url('/fonts/Pretendard-Medium.woff') format('woff');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/Pretendard-Regular.woff') format('woff');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url('/fonts/Pretendard-Light.woff') format('woff');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('/fonts/Pretendard-ExtraLight.woff') format('woff');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
    @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 100;
      font-display: swap;
      src: url('/fonts/Pretendard-Thin.woff') format('woff');
      unicodeRange: 'U+0030-0039, U+AC00-U+D7A3, U+0041-005A, U+0061-007A',
    }
  `}
  />
);

export default Fonts;
