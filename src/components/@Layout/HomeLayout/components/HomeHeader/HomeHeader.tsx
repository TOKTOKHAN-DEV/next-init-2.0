import { Flex, IconButton, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import { LAYOUT } from '@/constants/layout';
import { MY_IMAGES } from '@/images';

import HomeHeaderDrawer from './components/HomeHeaderDrawer';
import {
  HOME_HEADER_VARIANTS,
  HomeHeaderVariantType,
} from './constants/variants';

import { MenuIcon } from 'generated/icons/MyIcons';

interface HomeHeaderProps {
  variant?: HomeHeaderVariantType;
}

const HomeHeader = ({ variant = 'light' }: HomeHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cssByVariant = HOME_HEADER_VARIANTS[variant];
  return (
    <>
      <Flex //
        as="header"
        px={{ base: '16px', md: '80px' }}
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="sticky"
        transition="all 0.3s"
        w="100%"
        h={LAYOUT.HEADER.HEIGHT}
        {...cssByVariant.header}
      >
        <Image //
          alt={MY_IMAGES.ICONS.LOGO.alt}
          src={MY_IMAGES.ICONS.LOGO.src}
          w="74px"
          cursor="pointer"
        />
        <Image alt="menu" src="/images/header/menu.png" w="24px" h="24px" />
        <IconButton //
          size={'xs'}
          color={cssByVariant.pointColor}
          icon={<MenuIcon w="24px" h="24px" />}
          onClick={onOpen}
          cursor="pointer"
          bg="transparent"
          aria-label="btn-toggle-drawer"
        />
      </Flex>
      <HomeHeaderDrawer
        isOpen={isOpen}
        onClose={onClose}
        bodyProps={cssByVariant.drawer}
      />
    </>
  );
};

export default HomeHeader;
