type AppendToObject<T ,K extends string,V extends any>={
    [P in keyof T | K  ]:P extends keyof T?T[P]:V
}

// type AppendToObject<T, U extends string, V> = {
//   [P in keyof T | U]:P extends keyof T ? T[P] : V
// }
type appendInObject=AppendToObject<{name:string},"key","value">