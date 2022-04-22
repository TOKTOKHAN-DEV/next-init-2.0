import { Icon, IconProps } from '@chakra-ui/react';

const CopyIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <mask id="path-1-inside-1" fill="white">
        <rect x="3" y="7" width="13" height="13" rx="1" />
      </mask>
      <rect
        x="3"
        y="7"
        width="13"
        height="13"
        rx="1"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        mask="url(#path-1-inside-1)"
      />
      <mask id="path-2-inside-2" fill="white">
        <rect x="6" y="4" width="13" height="13" rx="1" />
      </mask>
      <rect
        x="6"
        y="4"
        width="13"
        height="13"
        rx="1"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        mask="url(#path-2-inside-2)"
      />
    </Icon>
  );
};

export default CopyIcon;
