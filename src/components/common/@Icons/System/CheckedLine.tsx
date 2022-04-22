import { Icon, IconProps } from '@chakra-ui/react';

const CheckedLineIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.3894 11.7524L10.7304 15.9653L16.9984 8.61631"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default CheckedLineIcon;
