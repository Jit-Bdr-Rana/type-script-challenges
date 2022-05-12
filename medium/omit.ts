type OmitType<T,U extends keyof T>= {[P in keyof T as P extends U ? never : P]: T[P]}

type MyOmit<T, U extends keyof T> = {
  [P in Exclude<keyof T, U>]: T[P]
}