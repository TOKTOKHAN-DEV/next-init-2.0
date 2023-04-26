import { ENV } from '@/configs/env';

const isValid = () => {
  if (!ENV.FACEBOOK_PIXEL_KEY) return false;
  if (typeof window === 'undefined') return false;
  if (!window.fbq) return false;
  return true;
};

export const completeRegistration = (social: string) => {
  if (!isValid()) return;
  window.fbq('track', 'CompleteRegistration', { content_name: social });
};

export const startProject = (params: { id: string; step: number }) => {
  if (!isValid()) return;
  window.fbq('track', 'ViewContent', {
    contents_id: params.id,
    content_name: 'StartProject',
    value: params.step,
  });
};

export const completeProject = (id: string) => {
  if (!isValid()) return;
  window.fbq('track', 'ViewContent', {
    content_name: 'CompleteProject',
    content_ids: id,
  });
};

export const consultingApply = () => {
  if (!isValid()) return;
  window.fbq('track', 'Lead', { content_name: 'ConsultingApply' });
};

export const requestApply = () => {
  if (!isValid()) return;
  window.fbq('track', 'Lead', { content_name: 'RequestApply' });
};

export const FacebookSetter = () => {
  if (!ENV.FACEBOOK_PIXEL_KEY) return <></>;
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${ENV.FACEBOOK_PIXEL_KEY}');
        fbq('track', 'PageView');
      `,
        }}
      />
      <noscript>
        <img
          alt="facebook-pixel"
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${ENV.FACEBOOK_PIXEL_KEY}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
};
