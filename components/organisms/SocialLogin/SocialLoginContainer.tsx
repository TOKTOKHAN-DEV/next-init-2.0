import React from 'react';

import { SocialLogin, SocialLoginProps } from './SocialLogin';

export const SocialLoginContainer = ({ ...props }: SocialLoginProps) => {
  return <SocialLogin {...props} />;
};
