import { Icon, IconProps } from '@chakra-ui/react';

interface Props {
  variant?: 'solid' | 'outline';
}

const ComunityIcon = ({ variant = 'solid', ...props }: Props & IconProps) => {
  if (variant === 'solid') {
    return (
      <Icon viewBox="0 0 24 24" {...props}>
        <path
          d="M18.616 5H4.79199C4.55666 5 4.32362 5.04636 4.1062 5.13641C3.88879 5.22647 3.69124 5.35847 3.52484 5.52487C3.35844 5.69127 3.22641 5.88882 3.13635 6.10623C3.0463 6.32365 3 6.55668 3 6.79201V15.825C3 16.0603 3.0463 16.2934 3.13635 16.5108C3.22641 16.7282 3.35844 16.9257 3.52484 17.0921C3.69124 17.2586 3.88879 17.3905 4.1062 17.4806C4.32362 17.5707 4.55666 17.617 4.79199 17.617H4.961L3.76099 20.443L8.37799 17.617H18.613C18.8483 17.617 19.0814 17.5707 19.2988 17.4806C19.5162 17.3905 19.7137 17.2586 19.8801 17.0921C20.0465 16.9257 20.1785 16.7282 20.2686 16.5108C20.3586 16.2934 20.405 16.0603 20.405 15.825V6.79201C20.405 6.31726 20.2166 5.8619 19.8812 5.52592C19.5457 5.18995 19.0907 5.00079 18.616 5Z"
          fill="currentColor"
        />
        <path
          d="M6.36792 8.68402H17.0399"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.36792 11.308H17.0399"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.36792 13.933H17.0399"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    );
  }
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.36792 8.68402H17.0399"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.36792 11.308H17.0399"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.36792 13.933H17.0399"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.616 5H4.79199C4.55666 5 4.32362 5.04636 4.1062 5.13641C3.88879 5.22647 3.69124 5.35847 3.52484 5.52487C3.35844 5.69127 3.22641 5.88882 3.13635 6.10623C3.0463 6.32365 3 6.55668 3 6.79201V15.825C3 16.0603 3.0463 16.2934 3.13635 16.5108C3.22641 16.7282 3.35844 16.9257 3.52484 17.0921C3.69124 17.2586 3.88879 17.3905 4.1062 17.4806C4.32362 17.5707 4.55666 17.617 4.79199 17.617H4.961L3.76099 20.443L8.37799 17.617H18.613C18.8483 17.617 19.0814 17.5707 19.2988 17.4806C19.5162 17.3905 19.7137 17.2586 19.8801 17.0921C20.0465 16.9257 20.1785 16.7282 20.2686 16.5108C20.3586 16.2934 20.405 16.0603 20.405 15.825V6.79201C20.405 6.31726 20.2166 5.8619 19.8812 5.52592C19.5457 5.18995 19.0907 5.00079 18.616 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ComunityIcon;
