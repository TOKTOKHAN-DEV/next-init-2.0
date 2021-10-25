import React from 'react';

import { SocialLogin } from './SocialLogin';
import { SocialType } from 'components/common/molecules/SocialButton';

export const SocialLoginContainer = () => {
  // 소셜로그인 처리
  const haddleSocialLogin = (social: SocialType) => {
    console.log('haddleSocial Login : ', social);
  };

  return <SocialLogin haddleSocialLogin={haddleSocialLogin} />;
};
