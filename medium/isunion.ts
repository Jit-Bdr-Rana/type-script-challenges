type IsUnion<T, U = T> = T extends U ?([U] extends [T]?false:true):never


type type1=IsUnion<"afs">
type type2=IsUnion<"asdf">
type type3=IsUnion<[1,3,4]|[3,4,5]>
