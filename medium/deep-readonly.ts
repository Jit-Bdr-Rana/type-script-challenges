import {Todo} from '../interface/todo'

type DeepReadOnly<T>={
    readonly[K in keyof T]: keyof T[K] extends never?T[K]:DeepReadOnly<T[K]>
}


interface Person{
  name:string;
  age:number;
  address:{
      name:string,
  }
}

type Deep=DeepReadOnly<Person>;


let checkDeepReadOnly:Deep={
 name:'s',
 age:12,
 address:{
     name:"ktm"
 }
}

checkDeepReadOnly.address.name="adfa"

