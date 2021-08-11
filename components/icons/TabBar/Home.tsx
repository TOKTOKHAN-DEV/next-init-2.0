import { Icon, IconProps } from '@chakra-ui/react';

interface Props {
  variant?: 'solid' | 'outline';
}

const HomeIcon = ({ variant = 'solid', ...props }: Props & IconProps) => {
  if (variant === 'solid') {
    return (
      <Icon viewBox="0 0 24 24" {...props}>
        <path d="M9.64396 20.142V14.407H13.502V20.142H18.324V12.493H21.217L11.573 3.89301L1.92896 12.493H4.82196V20.14L9.64396 20.142Z" fill="currentColor" />
      </Icon>
    );
  }
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M18.3237 20.1422V12.4955H21.2169L11.573 3.893L1.929 12.4955H4.82219V20.1422H9.64417V14.4072H13.5017V20.1422H18.3237ZM18.3237 21.1422H13.5017C12.9495 21.1422 12.5017 20.6945 12.5017 20.1422V15.4072H10.6442V20.1422C10.6442 20.6945 10.1964 21.1422 9.64417 21.1422H4.82219C4.26991 21.1422 3.82219 20.6945 3.82219 20.1422V13.4955H1.929C1.51414 13.4955 1.14236 13.2394 0.994586 12.8517C0.846816 12.4641 0.953736 12.0254 1.26334 11.7493L10.9073 3.14675C11.0969 2.97759 11.3349 2.89301 11.573 2.89301C11.811 2.89301 12.049 2.97759 12.2386 3.14675L21.8826 11.7493C22.1922 12.0254 22.2991 12.4641 22.1513 12.8517C22.0036 13.2394 21.6318 13.4955 21.2169 13.4955H19.3237V20.1422C19.3237 20.6945 18.876 21.1422 18.3237 21.1422Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default HomeIcon;
