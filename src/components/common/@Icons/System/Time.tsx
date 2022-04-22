import { Icon, IconProps } from '@chakra-ui/react';

const TimeIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 6.22691V12.0003H17.7109"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </Icon>
  );
};

export default TimeIcon;
