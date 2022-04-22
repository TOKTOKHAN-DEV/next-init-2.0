import { Icon, IconProps } from '@chakra-ui/react';

const MoreIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M18.5 6C19.3284 6 20 5.32843 20 4.5C20 3.67157 19.3284 3 18.5 3C17.6716 3 17 3.67157 17 4.5C17 5.32843 17.6716 6 18.5 6Z"
        fill="currentColor"
      />
      <path
        d="M18.5 13C19.3284 13 20 12.3284 20 11.5C20 10.6716 19.3284 10 18.5 10C17.6716 10 17 10.6716 17 11.5C17 12.3284 17.6716 13 18.5 13Z"
        fill="currentColor"
      />
      <path
        d="M18.5 20C19.3284 20 20 19.3284 20 18.5C20 17.6716 19.3284 17 18.5 17C17.6716 17 17 17.6716 17 18.5C17 19.3284 17.6716 20 18.5 20Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default MoreIcon;
