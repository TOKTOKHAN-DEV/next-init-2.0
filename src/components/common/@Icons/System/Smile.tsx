import { Icon, IconProps } from '@chakra-ui/react';

const SmileIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.145 13.512C15.7156 14.2549 15.0982 14.8718 14.355 15.3007C13.6117 15.7296 12.7687 15.9554 11.9105 15.9554C11.0524 15.9554 10.2094 15.7296 9.46609 15.3007C8.72282 14.8718 8.10547 14.2549 7.67603 13.512"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11Z"
        fill="currentColor"
      />
      <path
        d="M16 11C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default SmileIcon;
