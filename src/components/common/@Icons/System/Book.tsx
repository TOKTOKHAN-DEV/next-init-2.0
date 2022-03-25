import { Icon, IconProps } from '@chakra-ui/react';

const BookIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2.99902 4.872V19.152C2.99902 19.152 9.19907 17.858 11.7811 20.23V5.95401C9.19907 3.58101 2.99902 4.872 2.99902 4.872Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.564 4.872V19.152C20.564 19.152 14.369 17.858 11.782 20.23V5.95401C14.369 3.58101 20.564 4.872 20.564 4.872Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default BookIcon;
