import { CONFIG } from '@config';

const isValid = () => {
  if (!CONFIG.GA_KEY) return false;
  if (typeof window === 'undefined') return false;
  if (!window.gtag) return false;
  return true;
};

export const completeRegistration = (social: string) => {
  if (!isValid()) return;
  window.gtag('event', 'CompleteRegistration', { social });
};

export const startProject = (params: { id: string; step: number }) => {
  if (!isValid()) return;
  window.gtag('event', 'StartProject', params);
};

export const completeProject = (id: string) => {
  if (!isValid()) return;
  window.gtag('event', 'CompleteProject', { id });
};

export const consultingApply = () => {
  if (!isValid()) return;
  window.gtag('event', 'ConsultingApply');
};

export const requestApply = () => {
  if (!isValid()) return;
  window.gtag('event', 'RequestApply');
};

export const GASetter = () => {
  if (!CONFIG.GA_KEY) return <></>;
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_KEY}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${CONFIG.GA_KEY}');
      `,
        }}
      />
    </>
  );
};
