import { Icon, IconProps } from '@chakra-ui/react';

const CheckLineIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5.0979 9.14579L11.5479 18.2649L19.4819 5.64579"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default CheckLineIcon;
