import { Icon, IconProps } from '@chakra-ui/react';

const SearchIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10 17.25C14.0041 17.25 17.25 14.0041 17.25 10C17.25 5.99594 14.0041 2.75 10 2.75C5.99594 2.75 2.75 5.99594 2.75 10C2.75 14.0041 5.99594 17.25 10 17.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15.5 15.5L21.5 21.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Icon>
  );
};

export default SearchIcon;
