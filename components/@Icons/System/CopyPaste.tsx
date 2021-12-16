import { Icon, IconProps } from '@chakra-ui/react';

const CopyPasteIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <mask id="path-1-inside-1" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 16H16V20L8 20C7.44771 20 7 19.5523 7 19L7 8C7 7.44771 7.44772 7 8 7L19 7C19.5523 7 20 7.44772 20 8L20 16Z"
        />
      </mask>
      <path
        d="M20 16V17.2C20.6627 17.2 21.2 16.6627 21.2 16H20ZM16 16V14.8C15.3373 14.8 14.8 15.3373 14.8 16H16ZM16 20V21.2C16.3183 21.2 16.6235 21.0736 16.8485 20.8485C17.0736 20.6235 17.2 20.3183 17.2 20H16ZM8 20V18.8V20ZM20 14.8H16V17.2H20V14.8ZM14.8 16V20H17.2V16H14.8ZM16 18.8L8 18.8V21.2L16 21.2V18.8ZM8 18.8C8.11046 18.8 8.2 18.8895 8.2 19H5.8C5.8 20.215 6.78497 21.2 8 21.2V18.8ZM8.2 19L8.2 8H5.8L5.8 19H8.2ZM8.2 8C8.2 8.11046 8.11046 8.2 8 8.2V5.8C6.78498 5.8 5.8 6.78497 5.8 8H8.2ZM8 8.2L19 8.2V5.8L8 5.8V8.2ZM19 8.2C18.8895 8.2 18.8 8.11046 18.8 8H21.2C21.2 6.78497 20.215 5.8 19 5.8V8.2ZM18.8 8L18.8 16H21.2L21.2 8H18.8Z"
        fill="currentColor"
        mask="url(#path-1-inside-1)"
      />
      <path d="M17 10L10 10" stroke="currentColor" strokeLinejoin="round" />
      <path d="M17 13L10 13" stroke="currentColor" strokeLinejoin="round" />
      <path d="M14 16H10" stroke="currentColor" strokeLinejoin="round" />
      <path
        d="M16.3536 19.3536C16.2106 19.4966 15.9955 19.5393 15.8087 19.4619C15.6218 19.3845 15.5 19.2022 15.5 19V16C15.5 15.7239 15.7239 15.5 16 15.5H19C19.2022 15.5 19.3845 15.6218 19.4619 15.8087C19.5393 15.9955 19.4966 16.2106 19.3536 16.3536L16.3536 19.3536Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6C6.44772 6 6 6.44771 6 7V17H5C4.44771 17 4 16.5523 4 16V5C4 4.44771 4.44772 4 5 4H16C16.5523 4 17 4.44772 17 5V6H7Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default CopyPasteIcon;
