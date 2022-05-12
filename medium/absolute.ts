
type Absolute<T extends number | string | bigint>=`${T}` extends `-${infer First}`?First:`${T}`

type Test = -300;
type Results = Absolute<Test>