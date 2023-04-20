// type Example = ItemOf<['a', 'b', 'c']>;
// Example = "a" | "b" | "c"

export type ItemOf<T extends Array<any>> = T[number];
