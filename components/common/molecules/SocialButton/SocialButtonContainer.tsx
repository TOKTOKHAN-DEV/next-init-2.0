import React from 'react';

import { SocialButton, SocialButtonProps } from './SocialButton';

export const SocialButtonContainer = ({ social, haddleLogin }: SocialButtonProps) => {
  return <SocialButton social={social} haddleLogin={haddleLogin} />;
};
