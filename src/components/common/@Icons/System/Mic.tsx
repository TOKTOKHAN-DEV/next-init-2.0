import { Icon, IconProps } from '@chakra-ui/react';

const MicIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12.143 2.15399C13.162 2.15399 14.1392 2.55877 14.8597 3.27929C15.5802 3.9998 15.985 4.97703 15.985 5.99599V12.143C15.985 13.162 15.5802 14.1392 14.8597 14.8597C14.1392 15.5802 13.162 15.985 12.143 15.985C11.1241 15.985 10.1468 15.5802 9.42632 14.8597C8.70581 14.1392 8.30103 13.162 8.30103 12.143V5.99599C8.30103 4.97703 8.70581 3.9998 9.42632 3.27929C10.1468 2.55877 11.1241 2.15399 12.143 2.15399V2.15399Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19V22"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.016 12.912C18.8266 14.6023 18.021 16.1636 16.7531 17.2974C15.4852 18.4312 13.8439 19.058 12.143 19.058C10.4421 19.058 8.80085 18.4312 7.53294 17.2974C6.26503 16.1636 5.4594 14.6023 5.27002 12.912"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default MicIcon;
