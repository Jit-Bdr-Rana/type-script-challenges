type LengthOfString<S extends string, A extends string[]=[]>=S extends `${infer First}${infer Second}`?LengthOfString<Second,[...A,First]>:A['length']



type Lenght=LengthOfString<"ass">

