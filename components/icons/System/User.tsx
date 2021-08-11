import { Icon, IconProps } from '@chakra-ui/react';

const UserIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11.6839 12.232C14.045 12.232 15.9589 10.318 15.9589 7.95701C15.9589 5.59599 14.045 3.68201 11.6839 3.68201C9.32292 3.68201 7.40894 5.59599 7.40894 7.95701C7.40894 10.318 9.32292 12.232 11.6839 12.232Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6849 14.169C7.24694 14.169 3.64893 16.49 3.64893 19.354H19.7209C19.7209 16.49 16.1229 14.169 11.6849 14.169Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default UserIcon;
