import { Icon, IconProps } from '@chakra-ui/react';

const PasteIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M15 8L8 8" stroke="currentColor" strokeLinejoin="round" />
      <path d="M15 11L8 11" stroke="currentColor" strokeLinejoin="round" />
      <path d="M11 14H8" stroke="currentColor" strokeLinejoin="round" />
      <path
        d="M17.7987 12L13 14.8743L17.7987 17.9281V16.3114H20.9396V13.6168H17.7987V12Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M13 18H5V5H18V10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default PasteIcon;
