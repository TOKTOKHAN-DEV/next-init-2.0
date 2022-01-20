import { Icon, IconProps } from '@chakra-ui/react';

const SolidUpIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7 4L11 9H3L7 4Z" fill="currentColor" />
    </Icon>
  );
};

export default SolidUpIcon;
