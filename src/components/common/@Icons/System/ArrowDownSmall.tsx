import { Icon, IconProps } from '@chakra-ui/react';

const ArrowDownSmallIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18 16.4449L13.918 12.0591L18 7.99908"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16.4449L6.91797 12.0591L11 7.99908"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowDownSmallIcon;
