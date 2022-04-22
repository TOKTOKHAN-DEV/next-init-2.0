import { Icon, IconProps } from '@chakra-ui/react';

const ArrowDownIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8.69995 11.972L14.3259 18.312L20.152 11.972"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowDownIcon;
