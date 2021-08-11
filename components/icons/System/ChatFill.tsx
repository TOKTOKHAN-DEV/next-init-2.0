import { Icon, IconProps } from '@chakra-ui/react';

const ChatFillIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10.086 2.49899C5.068 2.49899 1 5.899 1 10.099C1.01139 11.6531 1.56088 13.1553 2.55499 14.35L1.10498 17.667L4.64197 16.174C6.2801 17.1797 8.16781 17.705 10.09 17.69C15.108 17.69 19.175 14.29 19.175 10.09C19.175 5.89 15.105 2.49899 10.086 2.49899Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ChatFillIcon;
