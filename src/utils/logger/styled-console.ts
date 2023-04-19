/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from 'react';

export type StyledConsoleArgs = {
  topic?: string;
  title?: string;
  data: unknown;
  topicColor?: CSSProperties['color'];
  method?: 'log' | 'warn' | 'error' | 'info';
};

function styledConsole({
  topic = '',
  title = '',
  data,
  topicColor = 'skyblue',
  method = 'log',
}: StyledConsoleArgs) {
  const term_1 = `%c[${topic}]`;
  const term_1_style = [`color: ${topicColor}`, 'font-weight : bold'].join(';');
  const term_2 = `%c${title}`;
  const term_2_style = ['font-weight : bold'].join(';');
  console[method](`${term_1}${term_2}`, term_1_style, term_2_style, data);
}

export default styledConsole;
