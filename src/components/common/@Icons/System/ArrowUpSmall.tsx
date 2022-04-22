import { Icon, IconProps } from '@chakra-ui/react';

const ArrowUpSmallIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4.47803 9.98L7.89001 6.48598L11.423 9.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowUpSmallIcon;
