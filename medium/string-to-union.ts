

type StringToUnion<T extends string,U extends string[]=[]>=T extends `${infer First}${infer Second}`?StringToUnion<Second,[...U,First]>:U[number];

type Tests = '123';
type Resultss = StringToUnion<Tests>;