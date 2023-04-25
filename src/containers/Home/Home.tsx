import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import ImageAsNext from '@/components/ImageAsNext';
import { useGlobalContext } from '@/contexts/global/useGlobalStoreContext';

import { todoStorage } from '@/utils/web-storage/todo';

function Home() {
  const todos = useGlobalContext((ctx) => ctx.webStorage.todoList);
  return (
    <Box>
      <Text fontFamily="akronim">jiasdawda asdwadawdawda asd awd</Text>
      <ImageAsNext w="100%" h="500px" alt="sdf" src={'/images/new_og.png'} />
      <button
        onClick={() => todoStorage?.set([...(todos || []), { text: 'value' }])}
      >
        add
      </button>
      {todos?.map((d, idx) => (
        <li key={idx}>{d.text}</li>
      ))}
    </Box>
  );
}

export default Home;
