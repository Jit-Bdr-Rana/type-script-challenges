import {Todo} from '../interface/todo'

// type MyReadOnly2<T,U extends keyof T | never>={
//     [U extends keyof T?]
// }

type MyReadonly2<T, K extends keyof T = keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key]
}  & {
  readonly [P in K]: T[P]
}


let test:MyReadonly2<Todo,'activity'>={
    name:'ada',
    activity:"adfa",
}


test.name="asfa"
test.activity="afda"

