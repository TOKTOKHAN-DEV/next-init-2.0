import { Component, ComponentType } from 'react';

// type Example = ComponentProps<(props: { number: number }) => JSX.Element>;
// Example === { number : number }

export type PropsOf<T> = T extends ComponentType<infer P> | Component<infer P>
  ? P
  : never;
