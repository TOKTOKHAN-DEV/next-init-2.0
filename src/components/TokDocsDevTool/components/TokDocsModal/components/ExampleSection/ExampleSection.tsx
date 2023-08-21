import React from 'react';

import { ExampleDocsType } from '../../types/docs';
import ContextSection from './components/ContextSection';
import LodashSection from './components/LodashSection';
import ReactHookFormSection from './components/ReactHookFormSection';
import S3FileUploadSection from './components/S3FileUploadSection';
import SocialSection from './components/SocialSection';
import TossSection from './components/TossSection';

interface ExampleSectionProps {
  selectedMenu: ExampleDocsType;
}

function ExampleSection({ selectedMenu }: ExampleSectionProps) {
  return (
    <>
      {selectedMenu === 'Context 예시' && <ContextSection />}
      {selectedMenu === 'react-hook-from 예시' && <ReactHookFormSection />}
      {selectedMenu === 'throttle & debounce 예시' && <LodashSection />}
      {selectedMenu === '소셜 로그인 예시' && <SocialSection />}
      {selectedMenu === 'S3 파일 업로드 예시' && <S3FileUploadSection />}
      {selectedMenu === '토스 결제창 예시' && <TossSection />}
    </>
  );
}

export default ExampleSection;
