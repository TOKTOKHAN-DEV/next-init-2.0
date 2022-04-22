import { Icon, IconProps } from '@chakra-ui/react';

interface Props {
  variant?: 'solid' | 'outline';
}

const MyPageIcon = ({ variant = 'solid', ...props }: Props & IconProps) => {
  if (variant === 'solid') {
    return (
      <Icon viewBox="0 0 24 24" {...props}>
        <path
          d="M11.683 12.233C14.044 12.233 15.958 10.319 15.958 7.95798C15.958 5.59697 14.044 3.68298 11.683 3.68298C9.32194 3.68298 7.40796 5.59697 7.40796 7.95798C7.40796 10.319 9.32194 12.233 11.683 12.233Z"
          fill="currentColor"
        />
        <path
          d="M11.684 14.17C7.24596 14.17 3.64795 16.491 3.64795 19.355H19.7199C19.7199 16.491 16.122 14.17 11.684 14.17Z"
          fill="currentColor"
        />
      </Icon>
    );
  }
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11.683 12.233C14.044 12.233 15.958 10.319 15.958 7.95798C15.958 5.59697 14.044 3.68298 11.683 3.68298C9.32194 3.68298 7.40796 5.59697 7.40796 7.95798C7.40796 10.319 9.32194 12.233 11.683 12.233Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.684 14.17C7.24596 14.17 3.64795 16.491 3.64795 19.355H19.7199C19.7199 16.491 16.122 14.17 11.684 14.17Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default MyPageIcon;
