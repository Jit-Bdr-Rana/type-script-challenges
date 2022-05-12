type Chainable<T extends object = {}> = {
  option<K extends string, V extends unknown>(key: K extends keyof T ? never:K, value: V): Chainable<T & { [P in K]: V }>
  get(): T
}

declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

