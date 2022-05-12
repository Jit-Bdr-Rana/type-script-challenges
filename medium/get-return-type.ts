type  ReturnTypes<T extends (...args:any[])=>any>=T extends (...args:any[])=>infer A?A:never;


const fun=(a:string):string=>{
   return "a"
}


const ch:ReturnTypes<typeof fun>="aad"