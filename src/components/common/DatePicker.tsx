import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Input, InputGroup } from '@chakra-ui/react';

const customDateInput = ({ value, onClick, onChange }: any, ref: any) => (
  <Input
    autoComplete="off"
    value={value}
    ref={ref}
    onClick={onClick}
    onChange={onChange}
    placeholder="날짜를 선택해주세요."
  />
);
customDateInput.displayName = 'DateInput';

const CustomInput = forwardRef(customDateInput);

interface Props {
  isClearable?: boolean;
  onChange: (date: Date) => any;
  selectedDate: Date | undefined;
  showPopperArrow?: boolean;
}

const DatePicker2 = ({ selectedDate, onChange, ...props }: Props) => {
  return (
    <>
      <InputGroup>
        <ReactDatePicker
          selected={selectedDate}
          onChange={onChange}
          className="react-datapicker__input-text"
          customInput={<CustomInput />}
          dateFormat="yyyy년 MM월 dd일"
          {...props}
        />
      </InputGroup>
    </>
  );
};

export default DatePicker2;
