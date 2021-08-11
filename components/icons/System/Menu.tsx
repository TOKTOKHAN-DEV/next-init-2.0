import { Icon, IconProps } from '@chakra-ui/react';

const MenuIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M21 5H3V7.5H21V5Z" fill="currentColor" />
      <path d="M21 16H3V18.5H21V16Z" fill="currentColor" />
    </Icon>
  );
};

export default MenuIcon;
