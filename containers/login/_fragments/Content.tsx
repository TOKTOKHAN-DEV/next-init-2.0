import React from 'react';

import Social from './Social';
import Email from './Email';
import EmailwithSocial from './EmailwithSocial';

interface ContentType {
  type: 'social' | 'email' | 'email-with-social' | 'phone';
}
const Content = ({ type }: ContentType) => {
  switch (type) {
    case 'social':
      return <Social />;
    case 'email':
      return <Email />;
    case 'email-with-social':
      return <EmailwithSocial />;
    default:
      return null;
  }
};

export default Content;
