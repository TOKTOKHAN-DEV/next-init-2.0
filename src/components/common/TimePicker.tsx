import React from 'react';

import { Center, Container, Flex, Text } from '@chakra-ui/react';

interface TimePickerProps {
  handleTimeClick?: (val: { start: number; end: number }) => void;
}
const TimePicker = ({ handleTimeClick }: TimePickerProps) => {
  const timepickerRef = React.useRef<any>(null);
  const [active, setActive] = React.useState<boolean>(false);
  const [startPos, setStartPos] = React.useState<number>(0);
  const [endPos, setEndPos] = React.useState<number>(0);

  const [disabledTime, setDisabledTime] = React.useState<any>([
    0, 1, 2, 3, 4, 5,
  ]);
  const [pickTime, setPickTime] = React.useState<{
    start: number;
    end: number;
  }>({
    start: -1,
    end: -1,
  });

  const onScrollHandler = () => {
    if (!active) {
      setEndPos(timepickerRef.current.scrollLeft);
    }
  };
  const mouseDownHandler = (e: any) => {
    setActive(true);
    setStartPos(e.clientX);
    timepickerRef.current.style.cursor = 'grabbing';
    timepickerRef.current.style.userSelect = 'none';
  };
  const mouseUpHandler = (e: any) => {
    timepickerRef.current.style.cursor = 'grab';
    setEndPos(startPos - e.clientX + endPos);
    setActive(false);
  };
  const mouseMoveHandler = (e: any) => {
    if (active) {
      timepickerRef.current.scrollLeft = startPos - e.clientX + endPos;
    }
  };

  const handlePickTime = (time: number) => {
    const disabled = disabledTime.includes(time);
    if (!disabled) {
      if (pickTime.start === -1 || pickTime.end !== pickTime.start) {
        setPickTime({ start: time, end: time });
      } else if (pickTime.start && pickTime.end === pickTime.start) {
        if (time < pickTime.start) {
          setPickTime({ start: time, end: pickTime.start });
        } else {
          setPickTime({ start: pickTime.start, end: time });
        }
      }
    }
  };

  // For: Execute callback when pickTime changed
  React.useEffect(() => {
    if (handleTimeClick) handleTimeClick(pickTime);
  }, [pickTime]);

  return (
    <Container
      ref={timepickerRef}
      id="timepicker"
      overflow="auto"
      cursor="grab"
      onScroll={onScrollHandler}
      onMouseMove={mouseMoveHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      p="0px"
      css={{
        '&::-webkit-scrollbar': {
          width: '0px',
          height: '0px',
        },
        '&::-webkit-scrollbar-track': {
          width: '0px',
          height: '0px',
        },
      }}
    >
      <Flex pt="40px" pb="20px" px="10px" display="inline-flex">
        {new Array(24).fill(0).map((_, idx) => {
          const disabled = disabledTime.includes(idx);
          const isActive =
            pickTime.start === idx ||
            pickTime.end === idx ||
            (pickTime.start <= idx && pickTime.end >= idx);
          return (
            <Center
              key={`timepicker_${idx}`}
              w="45px"
              h="45px"
              bg={disabled ? 'gray.300' : isActive ? 'green.300' : 'blue.300'}
              position="relative"
              borderWidth="1px"
              borderColor={
                disabled ? 'gray.400' : isActive ? 'green.400' : 'blue.400'
              }
              cursor="pointer"
              onClick={() => !active && handlePickTime(idx)}
            >
              {idx === 0 && (
                <Text
                  w="20px"
                  position="absolute"
                  fontSize="10px"
                  top="-35px"
                  left="-10px"
                  textAlign="center"
                >
                  오전
                </Text>
              )}
              {idx === 12 && (
                <Text
                  w="20px"
                  position="absolute"
                  fontSize="10px"
                  top="-35px"
                  left="-10px"
                  textAlign="center"
                >
                  오후
                </Text>
              )}
              <Text
                fontSize="13px"
                w="15px"
                position="absolute"
                top="-22px"
                left="-8px"
                textAlign="center"
              >
                {idx}
              </Text>
              {!disabled && <Text fontSize="10px">예약가능</Text>}
            </Center>
          );
        })}
      </Flex>
    </Container>
  );
};

export default TimePicker;
