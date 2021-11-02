import React from 'react';

import LoginTemplate from 'components/templates/LoginTemplate';

import Content from './_fragments/Content';

export const LoginContainer = () => {
  // TODO : 클라이언트 별로 Type 설정
  // type: 'social' | 'email' | 'email-with-social' | 'phone';

  return <LoginTemplate content={<Content type="email" />} />;
};
