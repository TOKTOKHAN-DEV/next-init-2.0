import { Icon, IconProps } from '@chakra-ui/react';

const InfoIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 21C16.6944 21 20.5 17.1944 20.5 12.5C20.5 7.80558 16.6944 4 12 4C7.30558 4 3.5 7.80558 3.5 12.5C3.5 17.1944 7.30558 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 11.838H12.223V16.896H12.946"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default InfoIcon;
