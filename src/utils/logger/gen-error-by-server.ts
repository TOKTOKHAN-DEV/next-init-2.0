import { AxiosError } from 'axios';

export const defMessage = '에러가 발생했습니다. 고객센터에 문의해주세요.';

export type ErrorMessage = {
  [key: string]: any;
};

type FormattedError = {
  name: string;
  message: string;
};

export type GenErrorByServerType = {
  defMessage?: string;
  list?: FormattedError[];
  messagesWithKey?: string;
  messages?: string;
};

type ErrorMsgType = Record<string, string[]>;

const isErrorMessageValid = (errorMsg: any): errorMsg is ErrorMsgType => {
  if (typeof errorMsg !== 'object' || errorMsg === null) {
    return false;
  }

  return Object.values(errorMsg).every(
    (value) =>
      Array.isArray(value) && value.every((item) => typeof item === 'string'),
  );
};

const formatErrorMessage = (
  errorKey: string,
  errorMessage: string[],
): string => {
  const message = errorMessage.join('\n');
  return `[${errorKey}]: ${message}`;
};

/**
 * 서버에서 발생한 오류를 기반으로 에러 메세지 객체를 반환합니다.
 * 외부 백엔드와 협업시에 에러타입을 확인해주세요.
 * api logger에서 사용하고 있으며, 에러 메세지를 통해 토스트, 얼럿 등에 적용시킬 수 있습니다.
 *
 * @template T - AxiosError 타입의 제네릭 매개변수입니다.
 * @param errors - AxiosError 객체입니다.
 * @returns 서버에서 발생한 오류에 기반한 에러메세지 객체입니다.
 */
export const genErrorByServer = <
  T extends AxiosError<{ message: ErrorMessage }, any>,
>(
  errors: T,
): GenErrorByServerType => {
  const errorMsg = errors.response?.data.message;

  if (!errorMsg || !isErrorMessageValid(errorMsg)) {
    return { messagesWithKey: errors.message };
  }

  const formattedErrorsWithKey: FormattedError[] = Object.keys(errorMsg)
    .filter((key) => key in errorMsg)
    .map((key) => {
      const errorKey = key;
      const errorMessage = errorMsg[key];
      return {
        name: errorKey,
        message: formatErrorMessage(errorKey, errorMessage),
      };
    });

  const errorMessagesWithKey = formattedErrorsWithKey
    .map((error) => error.message)
    .join('\n');

  const errorMessages = Object.values(errorMsg).join('\n');

  return {
    defMessage,
    list: formattedErrorsWithKey,
    messagesWithKey: errorMessagesWithKey,
    messages: errorMessages,
  };
};
