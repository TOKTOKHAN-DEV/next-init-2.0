import { Icon, IconProps } from '@chakra-ui/react';

const RewindIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M16.4661 9.31699H20.9531V4.83299"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.78 17.78C16.6297 18.9303 15.1642 19.7136 13.5687 20.031C11.9732 20.3483 10.3194 20.1854 8.81653 19.5629C7.31362 18.9404 6.02905 17.8861 5.12529 16.5336C4.22152 15.181 3.73914 13.5908 3.73914 11.964C3.73914 10.3373 4.22152 8.74704 5.12529 7.39445C6.02905 6.04186 7.31362 4.98764 8.81653 4.3651C10.3194 3.74257 11.9732 3.57968 13.5687 3.89703C15.1642 4.21439 16.6297 4.99773 17.78 6.148L20.952 9.32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default RewindIcon;
