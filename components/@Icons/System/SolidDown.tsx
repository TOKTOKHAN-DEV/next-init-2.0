import { Icon, IconProps } from '@chakra-ui/react';

const SolidDownIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7 11L3 6L11 6L7 11Z" fill="currentColor" />
    </Icon>
  );
};

export default SolidDownIcon;
