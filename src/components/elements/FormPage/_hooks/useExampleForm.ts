import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  username: string;
  email: string;
  phone: string;
  gender: {
    label: string;
    value: string;
  };
  fruit: string;
};

/**
 * yup 을 이용하여 form의 유효성 검사를 도와줍니다.
 * react-hook-form과 yup을 연결해 줄 yupResolver 을 함께 사용합니다.
 *
 * validation에 반복되는 값은 상수로 빼서 관리합니다.
 *
 *
 *
 * @see https://github.com/jquense/yup#getting-started
 * @see https://yarnpkg.com/package/@hookform/resolvers#readme
 * */
export const exampleFormSchema = yup.object().shape({
  username: yup.string().required('해당 항목은 필수값 입니다.'),
  email: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .email('올바르지 않은 이메일 입니다.'),
  phone: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .test(
      'isNumber',
      '숫자만 입력 가능합니다.',
      (val) => !Number.isNaN(Number(val)),
    )
    .min(8, '최소 길이는 8자 입니다.')
    .max(11, '최대 길이는 11자 입니다.'),
  gender: yup.object().shape({
    value: yup.string().required('해당 항목은 필수값 입니다.'),
  }),
  fruit: yup.string().required('해당 항목은 필수값 입니다.'),
});

const useExampleForm = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(exampleFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useExampleForm;
