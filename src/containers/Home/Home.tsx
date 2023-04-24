import React from 'react';

import { Box } from '@chakra-ui/react';

import { useGlobalContext } from '@/contexts/global/useGlobalStoreContext';

import { todoStorage } from '@/utils/web-storage/todo';

function Home() {
  const todos = useGlobalContext((ctx) => ctx.webStorage.todoList);
  return (
    <Box>
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
