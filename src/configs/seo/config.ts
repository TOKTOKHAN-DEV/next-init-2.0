import { DefaultSeoProps } from 'next-seo';

/**
 * 페이지에 해당 메타태그가 적용되어 있지 않을 경우, 기본적으로 적용되는 SEO 설정입니다.
 * noindex, nofollow 설정은 각 페이지 단에서 지정하여 사용하는 것을 권장합니다.
 * noindex, nofollow의 기본 설정값은 false입니다.
 * @see https://github.com/garmeeh/next-seo
 */

export const config: DefaultSeoProps = {
  title: undefined, // 페이지의 meta title 입니다. defaultTitle 값이 있으면 undefined로 고정합니다.
  titleTemplate: '똑똑한 개발자 | %s', // 타이틀에 추가될 기본 title 템플릿입니다. 각 페이지에서 작성한 title이 %s에 적용됩니다.
  defaultTitle: '똑똑한 개발자', // 페이지에 title이 설정되어 있지 않으면 빈 정보 대신 defaultTitle이 사용됩니다.
  description: '디지털프로덕트의 TOKTOK한 경험', // 페이지의 meta 설명 설정입니다.
  canonical: 'https://www.toktokhan.dev/', // 페이지의 표준 URL 설정입니다.
  openGraph: {
    /**
     * Open Graph Protocol에 대한 자세한 설명은 아래의 링크를 참조합니다.
     * @see https://ogp.me/
     */
    title: '똑똑한 개발자', // 사이트의 제목 태그입니다.
    type: 'website', // 사이트의 종류입니다.
    locale: 'ko_KR', // 사이트의 언어 설정입니다.
    url: 'https://www.toktokhan.dev/', // 사이트의 대표 URL입니다.
    siteName: '똑똑한 개발자', // 전체 사이트에 대해 표시되어야 하는 이름입니다.
    description: '디지털프로덕트의 TOKTOK한 경험', // 사이트에 대한 설명입니다. meta description과 다를 수 있습니다.
    images: [
      // 소셜 미디어 플랫폼, 슬랙 등에서 미리보기로 사용할 이미지의 배열입니다.
      {
        url: '/images/new_og.png',
        width: 600,
        height: 315,
        alt: 'Og Image Alt',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    // 트위터에서 미리보기로 사용되는 Open Graph 설정입니다. next-seo 공식문서에서 제공하는 방식의 설정입니다.
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  // next-seo에서 다루지 않는 link tag를 적용합니다.
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
      //   href: `{process.env.NEXT_PUBLIC_DOMAIN}/favicon.ico`,
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/120.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/152.png',
      sizes: '152x152',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/167.png',
      sizes: '167x167',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/180.png',
      sizes: '180x180',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
  ],
  additionalMetaTags: [
    // next-seo에서 다루지 않는 meta tag를 적용합니다.
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'format-detection',
      content: 'telephone=no, address=no, email=no',
    },
  ],
};
