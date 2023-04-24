import React from 'react';

import { Select } from 'chakra-react-select';
import { Controller, UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

import FormHelper from '@/components/FormHelper';

import { FormDataType } from './hooks/useExampleForm';

interface ReactHookFormSectionProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

const ReactHookFormSectionView = ({
  formData: {
    register,
    control,
    formState: { errors },
  },
  onSubmit,
  ...basisProps
}: ReactHookFormSectionProps) => {
  return (
    <Box as="form" onSubmit={onSubmit} {...basisProps}>
      <FormHelper mb="40px" label="이름" errorText={errors.username?.message}>
        <Input {...register('username')} autoComplete="off" />
      </FormHelper>

      <FormHelper mb="40px" label="이메일" errorText={errors.email?.message}>
        <Input {...register('email')} autoComplete="off" />
      </FormHelper>

      <FormHelper mb="40px" label="전화번호" errorText={errors.phone?.message}>
        <Input flexGrow={1} {...register('phone')} autoComplete="off" />
      </FormHelper>

      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange } }) => (
          <FormHelper
            mb="40px"
            label="성별"
            errorText={errors.gender?.value?.message}
          >
            <Select
              isSearchable={false}
              onChange={onChange}
              options={[
                { value: 'men', label: '남자' },
                { value: 'women', label: '여자' },
              ]}
              placeholder=""
            />
          </FormHelper>
        )}
      />

      <Controller
        control={control}
        name="fruit"
        render={({ field: { onChange } }) => (
          <FormHelper mb="40px" label="과일" errorText={errors.fruit?.message}>
            <RadioGroup onChange={onChange}>
              <Stack direction="row">
                <Radio value="apple">사과</Radio>
                <Radio value="banana">바나나</Radio>
                <Radio value="orange">오렌지</Radio>
              </Stack>
            </RadioGroup>
          </FormHelper>
        )}
      />

      <Button border="1px solid black" type="submit">
        확인
      </Button>
    </Box>
  );
};

export default ReactHookFormSectionView;
