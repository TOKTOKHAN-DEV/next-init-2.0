import { Icon, IconProps } from '@chakra-ui/react';

interface Props {
  variant?: 'solid' | 'outline';
}

const StoreIcon = ({ variant = 'solid', ...props }: Props & IconProps) => {
  if (variant === 'solid') {
    return (
      <Icon viewBox="0 0 24 24" {...props}>
        <path d="M21.2759 11.349V20.4301H3.33594V11.36" fill="currentColor" />
        <path
          d="M21.2759 11.349V20.4301H3.33594V11.36"
          stroke="white"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5979 10.76L21.3919 4.021H3.20892L2.00293 10.76C2.00399 11.6763 2.36843 12.5547 3.01633 13.2026C3.66422 13.8505 4.54266 14.2149 5.45892 14.2159C6.2891 14.2149 7.09124 13.9155 7.71906 13.3723C8.34687 12.8291 8.75852 12.0784 8.87894 11.257C8.99935 12.0784 9.41098 12.8291 10.0388 13.3723C10.6666 13.9155 11.4687 14.2149 12.2989 14.2159C13.1346 14.2148 13.9416 13.9113 14.5709 13.3616C15.2003 12.8118 15.6095 12.0529 15.7229 11.225C15.8364 12.0529 16.2456 12.8118 16.8749 13.3616C17.5043 13.9113 18.3113 14.2148 19.1469 14.2159C20.0632 14.2149 20.9416 13.8505 21.5895 13.2026C22.2374 12.5547 22.6019 11.6763 22.6029 10.76H22.5979Z"
          fill="currentColor"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.86194 11.349L9.31394 4"
          stroke="white"
          strokeMiterlimit="10"
        />
        <path
          d="M15.724 11.342L15.272 4"
          stroke="white"
          strokeMiterlimit="10"
        />
      </Icon>
    );
  }
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21.2759 13.478V20.4291H3.33594V13.4861"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5979 10.76L21.3919 4.021H3.20892L2.00293 10.76C2.00399 11.6763 2.36843 12.5547 3.01633 13.2026C3.66422 13.8505 4.54266 14.2149 5.45892 14.2159C6.2891 14.2149 7.09124 13.9155 7.71906 13.3723C8.34687 12.8291 8.75852 12.0784 8.87894 11.257C8.99935 12.0784 9.41098 12.8291 10.0388 13.3723C10.6666 13.9155 11.4687 14.2149 12.2989 14.2159C13.1346 14.2147 13.9416 13.9113 14.5709 13.3616C15.2003 12.8118 15.6095 12.0529 15.7229 11.225C15.8364 12.0529 16.2456 12.8118 16.8749 13.3616C17.5043 13.9113 18.3113 14.2147 19.1469 14.2159C20.0632 14.2149 20.9416 13.8505 21.5895 13.2026C22.2374 12.5547 22.6019 11.6763 22.6029 10.76H22.5979Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.86194 11.349L9.31394 4"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
      <path
        d="M15.724 11.342L15.272 4"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
    </Icon>
  );
};

export default StoreIcon;
