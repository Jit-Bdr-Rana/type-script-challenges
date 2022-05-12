//answer
type TupleToObject<T extends readonly string[]> = { [K in T[number]]: any }





const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> 



