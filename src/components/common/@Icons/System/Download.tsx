import { Icon, IconProps } from '@chakra-ui/react';

const DownloadIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19.3261 19.829H4.50907C4.41167 19.829 4.31523 19.8098 4.22527 19.7725C4.1353 19.7352 4.05357 19.6805 3.98475 19.6116C3.91592 19.5427 3.86136 19.4609 3.82419 19.3709C3.78701 19.2809 3.76794 19.1844 3.76807 19.087V6.49201L5.25007 3.52901H18.5851L20.0681 6.49201V19.087C20.0682 19.1845 20.0491 19.281 20.0119 19.3711C19.9746 19.4612 19.92 19.543 19.851 19.612C19.7821 19.6809 19.7003 19.7356 19.6102 19.7728C19.5201 19.81 19.4235 19.8291 19.3261 19.829V19.829Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.77393 13.631L12.0099 16.866L15.2459 13.631"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default DownloadIcon;
