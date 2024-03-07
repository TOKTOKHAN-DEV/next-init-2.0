import { CSSProperties } from 'react';

import { AxiosRequestConfig, isAxiosError } from 'axios';

import { genErrorByServer } from './gen-error-by-server';
import styledConsole, { StyledConsoleArgs } from './styled-console';

interface ApiLoggerArgs extends Pick<StyledConsoleArgs, 'method'> {
  status: string | number;
  reqData?: AxiosRequestConfig;
  resData: any;
}

export const apiLogger = ({
  status,
  reqData,
  resData,
  method: consoleMethod = 'log',
}: ApiLoggerArgs) => {
  const { method, url, params } = reqData || {};
  const METHOD = method ? method.toUpperCase() : '';
  const paramSerialized = params
    ? `?${new URLSearchParams(params).toString()}`
    : '';

  const errors = (() => {
    if (consoleMethod !== 'error') return '';
    if (!isAxiosError(resData)) return '';
    const errors = genErrorByServer(resData);
    return errors.messagesWithKey;
  })();

  styledConsole({
    topic: `${METHOD}:${status}`,
    topicColor: METHOD_COLOR_MAP[METHOD] || 'black',
    title: `${url}${paramSerialized}`,
    data: {
      request: reqData,
      response: resData,
    },
    method: consoleMethod,
    errors,
  });
};

const METHOD_COLOR_MAP: Record<string, CSSProperties['color']> = {
  GET: 'skyblue',
  PATCH: 'green',
  POST: 'orange',
  PUT: 'darkorange',
  DELETE: 'red',
};
