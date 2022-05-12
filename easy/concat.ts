type Concat<A extends Array<any>,B extends Array<any>>=[...A,...B]


const j:Concat<[1],[1]>=[1,1];