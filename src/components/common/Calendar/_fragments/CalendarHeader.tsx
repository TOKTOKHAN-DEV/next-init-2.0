import React from 'react';

import moment from 'moment';

import { Center, Flex, Text } from '@chakra-ui/react';

import ArrowLeftIcon from '@icons/System/ArrowLeft';
import ArrowRightIcon from '@icons/System/ArrowRight';

interface CalendarHeaderProps {
  date: moment.Moment;
  setDate: (val: moment.Moment) => void;
}

const CalendarHeader = ({ date, setDate }: CalendarHeaderProps) => {
  // const returnToday = () => setDate(moment());
  const jumpToMonth = (num: number) =>
    num
      ? setDate(date.clone().add(1, 'month'))
      : setDate(date.clone().subtract(1, 'month'));

  return (
    <Flex w="100%" alignItems="center" justifyContent="space-between">
      <Center
        w="30px"
        h="30px"
        cursor="pointer"
        onClick={async () => {
          jumpToMonth(0);
        }}
      >
        <ArrowLeftIcon />
      </Center>

      <Text fontWeight="bold" fontSize="20px" color="custom.primary">
        {date.format('YYYY.MM')}
      </Text>

      <Center
        w="30px"
        h="30px"
        cursor="pointer"
        onClick={() => {
          jumpToMonth(1);
        }}
      >
        <ArrowRightIcon />
      </Center>
    </Flex>
  );
};

export default CalendarHeader;
