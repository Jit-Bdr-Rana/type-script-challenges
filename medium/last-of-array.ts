type Last<T extends any[]>= T extends [...any,infer R]?R:never; 

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

const ta:tail1='c'
