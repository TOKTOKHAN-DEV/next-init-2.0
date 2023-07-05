import { DefaultSeoProps } from 'next-seo';

export const config: DefaultSeoProps = {
  title: undefined,
  titleTemplate: '똑똑한 개발자 | %s',
  defaultTitle: '똑똑한 개발자',
  description: '디지털프로덕트의 TOKTOK한 경험',
  canonical: 'https://www.toktokhan.dev/',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.toktokhan.dev/',
    title: '똑똑한 개발자',
    siteName: '똑똑한 개발자',
    description: '디지털프로덕트의 TOKTOK한 경험',
    images: [
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
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
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
