import React from 'react';

import { Box, Stack, Button } from '@chakra-ui/react';

import CartIcon from 'components/icons/TabBar/Cart';
import BookmarkIcon from 'components/icons/TabBar/Bookmark';
import CalendarIcon from 'components/icons/TabBar/Calendar';
import ChatIcon from 'components/icons/TabBar/Chat';
import ComunityIcon from 'components/icons/TabBar/Comunity';
import HeartIcon from 'components/icons/TabBar/Heart';
import HomeIcon from 'components/icons/TabBar/Home';
import LibraryIcon from 'components/icons/TabBar/Library';
import MoreIcon from 'components/icons/TabBar/More';
import MyPageIcon from 'components/icons/TabBar/MyPage';
import QRIcon from 'components/icons/TabBar/QR';
import StoreIcon from 'components/icons/TabBar/Store';

interface HomeTemplateProps {
  header: JSX.Element;
}

const HomeTemplate = ({ header }: HomeTemplateProps) => {
  return (
    <>
      <Box flexGrow={1}>{header}</Box>
      <CartIcon variant="outline" boxSize={6} />
      <CartIcon />
      <BookmarkIcon variant="outline" boxSize={6} />
      <BookmarkIcon boxSize={6} />
      <CalendarIcon variant="outline" boxSize={6} />
      <CalendarIcon boxSize={6} />
      <ChatIcon variant="outline" />
      <ChatIcon />
      <ComunityIcon variant="outline" />
      <ComunityIcon />
      <HeartIcon variant="outline" />
      <HeartIcon />
      <HomeIcon variant="outline" />
      <HomeIcon />
      <LibraryIcon variant="outline" />
      <LibraryIcon />
      <MoreIcon variant="outline" />
      <MoreIcon />
      <MyPageIcon variant="outline" />
      <MyPageIcon />
      <QRIcon variant="outline" />
      <QRIcon />
      <StoreIcon variant="outline" />
      <StoreIcon />
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs" borderRadius="50px">
          Button
        </Button>
        <Button colorScheme="teal" size="sm" borderRadius="50px">
          Button
        </Button>
        <Button colorScheme="teal" size="md" borderRadius="50px">
          Button
        </Button>
        <Button colorScheme="teal" size="lg" borderRadius="50px">
          Button
        </Button>
      </Stack>
    </>
  );
};

export default HomeTemplate;
