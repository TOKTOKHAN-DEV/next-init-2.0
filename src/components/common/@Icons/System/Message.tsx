import { Icon, IconProps } from '@chakra-ui/react';

const MessageIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 5H21V18.2222C21 18.4285 20.921 18.6263 20.7803 18.7722C20.6397 18.9181 20.4489 19 20.25 19H3.75C3.55109 19 3.36032 18.9181 3.21967 18.7722C3.07902 18.6263 3 18.4285 3 18.2222V5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 5L12 12L3 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default MessageIcon;
