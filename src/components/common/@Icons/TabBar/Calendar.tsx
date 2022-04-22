import { Icon, IconProps } from '@chakra-ui/react';

interface Props {
  variant?: 'solid' | 'outline';
}

const CalendarIcon = ({ variant = 'solid', ...props }: Props & IconProps) => {
  if (variant === 'solid') {
    return (
      <Icon viewBox="0 0 24 24" {...props}>
        <path
          d="M18 21.349H6.00002C4.70423 21.349 3.65002 20.2948 3.65002 18.999V6.99899C3.65002 5.7032 4.70423 4.64899 6.00002 4.64899H18C19.2958 4.64899 20.35 5.7032 20.35 6.99899V18.999C20.35 20.2948 19.2958 21.349 18 21.349Z"
          fill="currentColor"
        />
        <path
          d="M6 5.29899C5.06262 5.29899 4.3 6.06161 4.3 6.99899V18.999C4.3 19.9364 5.06262 20.699 6 20.699H18C18.9374 20.699 19.7 19.9364 19.7 18.999V6.99899C19.7 6.06161 18.9374 5.29899 18 5.29899H6ZM6 3.99899H18C19.6569 3.99899 21 5.34214 21 6.99899V18.999C21 20.6558 19.6569 21.999 18 21.999H6C4.34315 21.999 3 20.6558 3 18.999V6.99899C3 5.34214 4.34315 3.99899 6 3.99899Z"
          fill="currentColor"
        />
        <path d="M8.5 13.499H7.5V14.499H8.5V13.499Z" stroke="white" />
        <path d="M8.5 17.499H7.5V18.499H8.5V17.499Z" stroke="white" />
        <path d="M16.5 9.49899H15.5V10.499H16.5V9.49899Z" stroke="white" />
        <path d="M16.5 13.499H15.5V14.499H16.5V13.499Z" stroke="white" />
        <path d="M12.5 9.49899H11.5V10.499H12.5V9.49899Z" stroke="white" />
        <path d="M12.5 13.499H11.5V14.499H12.5V13.499Z" stroke="white" />
        <path d="M12.5 17.499H11.5V18.499H12.5V17.499Z" stroke="white" />
        <path d="M16.5 17.499H15.5V18.499H16.5V17.499Z" stroke="white" />
        <path
          d="M6.26001 2.797V6.297"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M17.74 2.797V6.297"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </Icon>
    );
  }
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18 4.64899H6.00002C4.70216 4.64899 3.65002 5.70112 3.65002 6.99899V18.999C3.65002 20.2969 4.70216 21.349 6.00002 21.349H18C19.2979 21.349 20.35 20.2969 20.35 18.999V6.99899C20.35 5.70112 19.2979 4.64899 18 4.64899Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M8.5 13.499H7.5V14.499H8.5V13.499Z" stroke="currentColor" />
      <path d="M8.5 17.499H7.5V18.499H8.5V17.499Z" stroke="currentColor" />
      <path d="M16.5 9.49899H15.5V10.499H16.5V9.49899Z" stroke="currentColor" />
      <path d="M16.5 13.499H15.5V14.499H16.5V13.499Z" stroke="currentColor" />
      <path d="M12.5 9.49899H11.5V10.499H12.5V9.49899Z" stroke="currentColor" />
      <path d="M12.5 13.499H11.5V14.499H12.5V13.499Z" stroke="currentColor" />
      <path d="M12.5 17.499H11.5V18.499H12.5V17.499Z" stroke="currentColor" />
      <path d="M16.5 17.499H15.5V18.499H16.5V17.499Z" stroke="currentColor" />
      <path
        d="M6.26001 2.797V6.297"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M17.74 2.797V6.297"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </Icon>
  );
};

export default CalendarIcon;
