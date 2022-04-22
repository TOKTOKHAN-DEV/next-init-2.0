import { Icon, IconProps } from '@chakra-ui/react';

const WriteIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20.284 12.366V19.4989H4.54199V3.76086H11.667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.252 3.13098L20.873 5.75195L12.2531 14.3719L9.31604 14.6389L9.63205 11.751L18.252 3.13098Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default WriteIcon;
