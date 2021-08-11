import { Icon, IconProps } from '@chakra-ui/react';

interface Props {
  variant?: 'solid' | 'outline';
}

const MoreIcon = ({ variant = 'solid', ...props }: Props & IconProps) => {
  if (variant === 'solid') {
    return (
      <Icon viewBox="0 0 24 24" {...props}>
        <path
          d="M17 12.5C17 13.8807 18.1193 15 19.5 15C20.8807 15 22 13.8807 22 12.5C22 11.1193 20.8807 10 19.5 10C18.1193 10 17 11.1193 17 12.5Z"
          fill="currentColor"
        />
        <path
          d="M10 12.5C10 13.8807 11.1193 15 12.5 15C13.8807 15 15 13.8807 15 12.5C15 11.1193 13.8807 10 12.5 10C11.1193 10 10 11.1193 10 12.5Z"
          fill="currentColor"
        />
        <path
          d="M3 12.5C3 13.8807 4.11929 15 5.5 15C6.88071 15 8 13.8807 8 12.5C8 11.1193 6.88071 10 5.5 10C4.11929 10 3 11.1193 3 12.5Z"
          fill="currentColor"
        />
      </Icon>
    );
  }
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17.5 12.5C17.5 13.6046 18.3954 14.5 19.5 14.5C20.6046 14.5 21.5 13.6046 21.5 12.5C21.5 11.3954 20.6046 10.5 19.5 10.5C18.3954 10.5 17.5 11.3954 17.5 12.5Z"
        stroke="currentColor"
      />
      <path
        d="M10.5 12.5C10.5 13.6046 11.3954 14.5 12.5 14.5C13.6046 14.5 14.5 13.6046 14.5 12.5C14.5 11.3954 13.6046 10.5 12.5 10.5C11.3954 10.5 10.5 11.3954 10.5 12.5Z"
        stroke="currentColor"
      />
      <path
        d="M3.5 12.5C3.5 13.6046 4.39543 14.5 5.5 14.5C6.60457 14.5 7.5 13.6046 7.5 12.5C7.5 11.3954 6.60457 10.5 5.5 10.5C4.39543 10.5 3.5 11.3954 3.5 12.5Z"
        stroke="currentColor"
      />
    </Icon>
  );
};

export default MoreIcon;
