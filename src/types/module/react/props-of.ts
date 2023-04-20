// type Example = ComponentProps<(props: { number: number }) => JSX.Element>;
// Example === { number : number }

export type PropsOf<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never;
