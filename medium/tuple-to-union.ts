import {Todo} from "../interface/todo"
type TupleToUnion<T extends any[]>=T[number]
// type TupleToUnion<T extends any[]>=keyof{
//     [K in  T[number]]:T[K]
// }
type Tuple=['a','b',1]
type checkUnion=TupleToUnion<Tuple>;


const checkTuple:checkUnion=1 