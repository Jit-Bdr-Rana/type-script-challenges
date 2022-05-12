// store result in U
type Flatten<T extends any[], U extends any[] = []> = T extends [
  infer P,
  ...infer R
]
  ? P extends any[]
    ? Flatten<[...P, ...R], U> // P is Array, go on
    : Flatten<R, [...U, P]> // P  is not Array, go on
  : U; // T is not Array, return U

  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]