import {Todo} from  "../interface/todo";

type ReadOnly<T>={
    readonly [k in keyof T]:T[k];
}


var ExTodo:ReadOnly<Todo>={
    name:'jit',
    address:"adasd"    
}
// @ts-ignore
ExTodo.name="asdfa";//ts  error as read only
