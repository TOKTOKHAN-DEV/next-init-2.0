import { Icon, IconProps } from '@chakra-ui/react';

const CheckLineSmallIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7.11401 9.93186L11.756 16.4948L17.466 7.41379"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default CheckLineSmallIcon;
