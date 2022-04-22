import { Icon, IconProps } from '@chakra-ui/react';

const QRcodeIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M20.963 11.444H3.41504V12.904H20.963V11.444Z"
        fill="currentColor"
      />
      <path
        d="M15.457 3.41501V4.87501H19.471V8.88801H20.928V3.41501H15.457Z"
        fill="currentColor"
      />
      <path
        d="M3.41504 3.41501V8.88801H4.87504V4.87401H8.88904V3.41501H3.41504Z"
        fill="currentColor"
      />
      <path
        d="M3.41504 15.457V20.928H8.88904V19.468H4.87504V15.457H3.41504Z"
        fill="currentColor"
      />
      <path
        d="M19.472 15.457V19.471H15.458V20.928H20.929V15.457H19.472Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default QRcodeIcon;
