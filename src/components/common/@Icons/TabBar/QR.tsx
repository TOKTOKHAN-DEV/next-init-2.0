import { Icon, IconProps } from '@chakra-ui/react';

interface Props {
  variant?: 'solid' | 'outline';
}

const QRIcon = ({ variant = 'solid', ...props }: Props & IconProps) => {
  if (variant === 'solid') {
    return (
      <Icon viewBox="0 0 24 24" {...props}>
        <path
          d="M21.452 2.92599H2.92603V21.42H21.452V2.92599Z"
          fill="currentColor"
        />
        <path d="M20.452 11.444H3.92603V12.904H20.452V11.444Z" fill="white" />
        <path
          d="M14.946 3.92599V5.38599H18.96V9.39899H20.417V3.92599H14.946Z"
          fill="white"
        />
        <path
          d="M3.92603 3.92599V9.39899H5.38603V5.38499H9.40003V3.92599H3.92603Z"
          fill="white"
        />
        <path
          d="M3.92603 14.948V20.419H9.40003V18.959H5.38603V14.948H3.92603Z"
          fill="white"
        />
        <path
          d="M18.96 14.948V18.962H14.946V20.419H20.417V14.948H18.96Z"
          fill="white"
        />
      </Icon>
    );
  }
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M20.452 11.443H3.92603V12.903H20.452V11.443Z"
        fill="currentColor"
      />
      <path
        d="M14.946 3.92499V5.38499H18.96V9.39799H20.417V3.92499H14.946Z"
        fill="currentColor"
      />
      <path
        d="M3.92603 3.92499V9.39799H5.38603V5.38399H9.40003V3.92499H3.92603Z"
        fill="currentColor"
      />
      <path
        d="M3.92603 14.947V20.418H9.40003V18.958H5.38603V14.947H3.92603Z"
        fill="currentColor"
      />
      <path
        d="M18.96 14.947V18.961H14.946V20.418H20.417V14.947H18.96Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default QRIcon;
