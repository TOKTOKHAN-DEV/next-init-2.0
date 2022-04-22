import { CSSProperties } from 'react';

import { AxiosRequestConfig } from 'axios';

import styledConsole, { StyledConsoleArgs } from './styledConsole';

interface ApiLoggerArgs extends Pick<StyledConsoleArgs, 'method'> {
  status: string | number;
  reqData: AxiosRequestConfig;
  resData: unknown;
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

  styledConsole({
    topic: `${METHOD}:${status}`,
    topicColor: METHOD_COLOR_MAP[METHOD] || 'black',
    title: `${url}${paramSerialized}`,
    data: {
      request: reqData,
      response: resData,
    },
    method: consoleMethod,
  });
};

const METHOD_COLOR_MAP: Record<string, CSSProperties['color']> = {
  GET: 'skyblue',
  PATCH: 'green',
  POST: 'orange',
  PUT: 'darkorange',
  DELETE: 'red',
};
