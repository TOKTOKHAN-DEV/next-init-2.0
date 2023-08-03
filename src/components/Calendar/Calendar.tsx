import React, { useState } from 'react';

import dayjs from 'dayjs';

import {
  Box,
  Flex,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
} from '@chakra-ui/react';

import CalendarHeader from './components/CalendarHeader';

import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

interface CalendarProps {
  handleDayClick?: (val: dayjs.Dayjs) => void;
}

const Calendar = ({ handleDayClick }: CalendarProps) => {
  const [date, setDate] = useState<dayjs.Dayjs>(() => dayjs());

  const _handleDayClick = (current: dayjs.Dayjs) => {
    setDate(current);
    if (handleDayClick) {
      handleDayClick(current);
    }
  };
  // chalandar generate logic
  function generate() {
    // 님 날짜 뭐 눌렀어요? (초기값은 오늘)
    const today = date;

    // startOf('month') : 이번 달의 첫번 째 날로 설정 set to the first of this month, 12:00 am
    // week() : Week of Year. 이번 년도의 몇번째 주인가? => 3월 8일이면 10이겠죠?
    const startWeek = today.clone().startOf('month').week();

    // endOf('month').week() : 이번 달의 마지막 날로 설정 한 후 그것이 이번 년도의 몇번째 주인지 체크
    // 만약 이번 해의 첫번째 주(1월 1일이 속한 주)라면 53으로 세팅, 아니라면 그대로 유지
    // 이런 작업의 이유는 마지막 주가 첫 주가 될 수 없기 때문에 당연한 것임
    const endWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();

    const calendar = [];

    // 시작 주부터 마지막 주까지 +1 씩 증가시킴
    // 이제 주마다 일을 표기해야 하므로 len이 7인 arr를 생성 후 index를 기반으로 day를 표기하자
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <Tr key={week} h="120px">
          {Array(7)
            .fill(0)
            .map((n, i) => {
              // 오늘 => 주어진 주의 시작 => n + i일 만큼 더해서 각 주의 '일'을 표기한다.
              const current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(n + i, 'day');
              // 오늘이 current와 같다면 우선 '선택'으로 두자
              const isSelected =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'selected'
                  : '';

              // 만약, 이번 달이 아닌 다른 달의 날짜라면 회색으로 표시하자
              const isGrayed =
                current.format('MM') !== today.format('MM') ? 'grayed' : '';

              return (
                <Td
                  key={current.format('YYYYMMDD')}
                  onClick={() => _handleDayClick(current)}
                  cursor="pointer"
                  h="40px"
                  bg={isSelected ? 'netural.10' : 'white'}
                >
                  <Flex
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    h="100%"
                    w="100%"
                  >
                    <Text
                      fontSize="14px"
                      textAlign="left"
                      color={isGrayed ? 'netural.50' : 'netural.200'}
                    >
                      {current.format('D')}
                    </Text>
                  </Flex>
                </Td>
              );
            })}
        </Tr>,
      );
    }
    return calendar;
  }

  return (
    <>
      <CalendarHeader date={date} setDate={setDate} />
      <TableContainer>
        <Table variant="round">
          <Tbody>
            <Tr>
              <Td colSpan={7}>
                <HStack spacing="10px">
                  {TitleData.map((d, idx) => {
                    if (!d.title)
                      return (
                        <Box
                          key={`calendar-${idx}`}
                          w="1px"
                          h="12px"
                          bg="netural.40"
                        />
                      );
                    return (
                      <Flex key={`calendar-${idx}`}>
                        <Image src={d.icon} w="14px" h="14px" alt="icon" />
                        <Text ml="5px">{d.title}</Text>
                      </Flex>
                    );
                  })}
                </HStack>
              </Td>
            </Tr>
            <Tr>
              {['일', '월', '화', '수', '목', '금', '토'].map((el) => (
                <Th
                  w="120px"
                  h="30px"
                  key={el}
                  textAlign="left"
                  color="netural.90"
                >
                  {el}
                </Th>
              ))}
            </Tr>
            {generate()}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Calendar;

const TitleData = [
  { title: '공단일치', icon: '/images/calendar/match.png' },
  { title: '수정된 일정', icon: '/images/calendar/update.png' },
  { title: '' },
  { title: '청구완료', icon: '/images/calendar/paid.png' },
  { title: '급여기록', icon: '/images/calendar/pay_check.png' },
  { title: '방문일정', icon: '/images/calendar/visit.png' },
];
