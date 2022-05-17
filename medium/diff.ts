type Diff<O, O1> = {
  [K in Exclude<keyof (O & O1), keyof (O | O1)>]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
}


type obj1={
  name:string;
  roll:number;
  address:string;
}

type obj2={
    age:number;
    address:string;
}

type checktype= keyof (obj1 | obj2)

const typeCheckValue:checktype='address'