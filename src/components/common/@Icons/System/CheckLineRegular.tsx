import { Icon, IconProps } from '@chakra-ui/react';

const CheckLineRegularIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5.84302 11.33L10.532 17.247L17.465 7.51005"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default CheckLineRegularIcon;
