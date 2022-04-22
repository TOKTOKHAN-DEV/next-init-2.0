import { Icon, IconProps } from '@chakra-ui/react';

const TextDeleteIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10.606 8.985L15.7876 14.1667"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.788 8.985L10.6063 14.1667"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M7.40297 5.95399L2.05898 11.196C2.01295 11.2409 1.97637 11.2946 1.9514 11.3538C1.92643 11.4131 1.91357 11.4767 1.91357 11.541C1.91357 11.6053 1.92643 11.669 1.9514 11.7282C1.97637 11.7875 2.01295 11.8411 2.05898 11.886L7.40297 17.129C7.49324 17.2174 7.61458 17.267 7.74097 17.267H19.979C20.1071 17.267 20.2299 17.2161 20.3205 17.1256C20.4111 17.035 20.462 16.9121 20.462 16.784V6.29903C20.462 6.17093 20.4111 6.04805 20.3205 5.95747C20.2299 5.86689 20.1071 5.81599 19.979 5.81599H7.74097C7.61456 5.8159 7.49318 5.86545 7.40297 5.95399V5.95399Z"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
    </Icon>
  );
};

export default TextDeleteIcon;
