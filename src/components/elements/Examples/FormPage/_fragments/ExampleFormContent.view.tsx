import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Box, BoxProps, Button, Input } from '@chakra-ui/react';

import FormHelper from '@components/common/FormHelper';

import { FormDataType } from '../_hooks/useExampleForm';

interface ExampleFormProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

const ExampleFormContentView = ({
  formData: {
    register,
    formState: { errors },
  },
  onSubmit,
  ...basisProps
}: ExampleFormProps) => {
  return (
    <Box as="form" onSubmit={onSubmit} {...basisProps}>
      <FormHelper mb="40px" label="이름" errorText={errors.username?.message}>
        <Input
          {...register('username', { required: true })}
          autoComplete="off"
        />
      </FormHelper>

      <FormHelper mb="40px" label="이메일" errorText={errors.email?.message}>
        <Input {...register('email', { required: true })} autoComplete="off" />
      </FormHelper>

      <FormHelper mb="40px" label="전화번호" errorText={errors.phone?.message}>
        <Input
          flexGrow={1}
          {...register('phone', {
            required: true,
          })}
          autoComplete="off"
        />
      </FormHelper>

      <Button border="1px solid black" type="submit" position="fixed">
        확인
      </Button>
    </Box>
  );
};

export default ExampleFormContentView;
