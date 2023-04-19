import React from 'react';

import { ExampleDocsType } from '../../TokDocsModal.data';
import LodashSection from './_fragments/LodashSection';
import ReactHookFormSection from './_fragments/ReactHookFormSection';
import S3FileUploadSection from './_fragments/S3FileUploadSection';
import SocialSection from './_fragments/SocialSection';
import TossSection from './_fragments/TossSection';

interface ExampleSectionProps {
  selectedMenu: ExampleDocsType;
}

function ExampleSection({ selectedMenu }: ExampleSectionProps) {
  return (
    <>
      {selectedMenu === 'react-hook-from 예시' && <ReactHookFormSection />}
      {selectedMenu === 'throttle & debounce 예시' && <LodashSection />}
      {selectedMenu === '소셜 로그인 예시' && <SocialSection />}
      {selectedMenu === 'S3 파일 업로드 예시' && <S3FileUploadSection />}
      {selectedMenu === '토스 결제창 예시' && <TossSection />}
    </>
  );
}

export default ExampleSection;
