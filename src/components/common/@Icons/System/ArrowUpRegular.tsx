import { Icon, IconProps } from '@chakra-ui/react';

const ArrowUpRegularIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18.4209 14.672L11.9119 9.08098L5.17188 14.672"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowUpRegularIcon;
