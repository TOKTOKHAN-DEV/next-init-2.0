import { Icon, IconProps } from '@chakra-ui/react';

const UploadButtonIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12.2471 7.5V15.166"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M16.0801 11.333H8.41408"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M18 2.64999H7.00002C5.14987 2.64999 3.65002 4.14984 3.65002 5.99999V17C3.65002 18.8501 5.14987 20.35 7.00002 20.35H18C19.8502 20.35 21.35 18.8501 21.35 17V5.99999C21.35 4.14984 19.8502 2.64999 18 2.64999Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </Icon>
  );
};

export default UploadButtonIcon;
