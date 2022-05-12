

type ReplaceAll<S extends string,F extends string, T extends string>=S extends `${infer First}${F}${infer Last}`?`${ReplaceAll<First,F,T>}${T}${ReplaceAll<Last,F,T>}`:S;



type replace= ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'