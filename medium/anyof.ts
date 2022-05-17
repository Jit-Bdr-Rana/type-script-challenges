type isTrue<T> = T extends Record<string,never> | [] | 0 | '' | false ? true : false


type AnyOf<T extends readonly any[]> = isTrue<T[number]> extends true ? false : true


type checkss=AnyOf<['s',0,false,[]]>