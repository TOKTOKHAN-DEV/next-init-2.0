import { Icon, IconProps } from '@chakra-ui/react';

const HistoryIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12.498 6.60699L12.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.852 14.726L12.514 12.556"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.52798 9.889H2.92798V5.289"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.30397 18.374C7.53003 19.5992 9.09181 20.4333 10.7919 20.771C12.492 21.1087 14.254 20.9348 15.8552 20.2712C17.4564 19.6076 18.825 18.4842 19.7878 17.0429C20.7507 15.6017 21.2646 13.9073 21.2646 12.174C21.2646 10.4407 20.7507 8.74634 19.7878 7.30508C18.825 5.86382 17.4564 4.74038 15.8552 4.0768C14.254 3.41321 12.492 3.23927 10.7919 3.57696C9.09181 3.91465 7.53003 4.74882 6.30397 5.974L2.92297 9.355"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default HistoryIcon;
