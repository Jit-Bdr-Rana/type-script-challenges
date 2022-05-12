type Trim<T extends string>=T extends `${' '|'\n'|'\t'}${infer U}${' '|'\n'|'\t'}`?Trim<U>:T;

type trimmed = Trim<'  Hello World  '> 