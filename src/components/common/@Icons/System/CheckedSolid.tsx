import { Icon, IconProps } from '@chakra-ui/react';

const CheckedSolidIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
        fill="currentColor"
      />
      <path
        d="M6.3894 11.7524L10.7304 15.9653L16.9984 8.61631"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default CheckedSolidIcon;
