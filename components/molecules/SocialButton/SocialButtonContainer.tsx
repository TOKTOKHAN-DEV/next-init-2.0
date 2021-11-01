import React from 'react';

import { SocialButton, SocialButtonProps } from './SocialButton';

export const SocialButtonContainer = ({ data, size }: SocialButtonProps) => {
  return <SocialButton data={data} size={size} />;
};
