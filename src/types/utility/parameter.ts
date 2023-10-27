/**
 * @example
    type Example = Parameter<(value: number) => void>
    Example = number
*/

export type Parameter<T> = T extends (param: infer U) => any ? U : never;
