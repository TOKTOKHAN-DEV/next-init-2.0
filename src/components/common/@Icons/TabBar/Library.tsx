import { Icon, IconProps } from '@chakra-ui/react';

interface Props {
  variant?: 'solid' | 'outline';
}

const LibraryIcon = ({ variant = 'solid', ...props }: Props & IconProps) => {
  if (variant === 'solid') {
    return (
      <Icon viewBox="0 0 24 24" {...props}>
        <path
          d="M2.99902 4.87197V19.152C2.99902 19.152 9.19907 17.858 11.7811 20.23V5.95397C9.19907 3.58097 2.99902 4.87197 2.99902 4.87197Z"
          fill="currentColor"
        />
        <path
          d="M20.564 4.87197V19.152C20.564 19.152 14.369 17.858 11.782 20.23V5.95397C14.369 3.58097 20.564 4.87197 20.564 4.87197Z"
          fill="currentColor"
        />
        <path d="M11.782 20.234V5.526" stroke="white" />
      </Icon>
    );
  }
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2.99902 4.87197V19.152C2.99902 19.152 9.19907 17.858 11.7811 20.23V5.95397C9.19907 3.58097 2.99902 4.87197 2.99902 4.87197Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.564 4.87197V19.152C20.564 19.152 14.369 17.858 11.782 20.23V5.95397C14.369 3.58097 20.564 4.87197 20.564 4.87197Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default LibraryIcon;
