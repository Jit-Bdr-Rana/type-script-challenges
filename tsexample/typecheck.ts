

type SomeConstructor = {
  new (s: string): string;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}