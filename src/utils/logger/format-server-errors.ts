import { AxiosError } from 'axios';
import { isObject } from 'lodash-es';

const defMessage = '에러가 발생했습니다. 고객센터에 문의해주세요.';

type ErrorMessage = {
  [key: string]: any;
};

type FormattedError = {
  name: string;
  message: string;
};

export const formatServerErrors = <
  T extends AxiosError<{ message: ErrorMessage }, any>,
>(
  errors: T,
): {
  defMessage?: string;
  list?: FormattedError[];
  messages?: string;
} => {
  const errorMsg = errors.response?.data.message;

  if (!errorMsg) {
    return { messages: errors.message };
  }

  const formatError = (errorKey: string, errorMessage: any): string => {
    const message = isObject(errorMessage)
      ? Object.values(errorMessage).join('\n')
      : errorMessage;
    return `[${errorKey}]: ${message}`;
  };

  const formattedErrors: FormattedError[] = Object.keys(errorMsg)
    .filter((key) => key in errorMsg)
    .map((key) => ({
      name: key,
      message: formatError(key, errorMsg[key]),
    }));

  const errorMessages = formattedErrors
    .map((error) => error.message)
    .join('\n');

  return { defMessage, list: formattedErrors, messages: errorMessages };
};
