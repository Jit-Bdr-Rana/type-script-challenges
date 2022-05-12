
type AppendArgument<F extends Function,A extends any>=F extends (...args:infer anyType)=>infer ReturnType?(...args:[...anyType,A])=>ReturnType:never;

type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean> 


const makeFun:Result=(a:number,b:string,c:boolean):number=>{
     return 1;
}