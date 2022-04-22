import { Icon, IconProps } from '@chakra-ui/react';

const ArrowDownRegularIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18.4209 9.32797L11.9119 14.919L5.17188 9.32797"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowDownRegularIcon;
