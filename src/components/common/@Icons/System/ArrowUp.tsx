import { Icon, IconProps } from '@chakra-ui/react';

const ArrowUpIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8.69995 17.03L14.3259 10.69L20.152 17.03"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowUpIcon;
