// infer keyword in typescript is used to capture the type


type  Returntype<T extends (...args:any)=> void>=T extends (...args:any)=>infer K?K:never;


function sum(jit:string):string{
    return "aaf"
}

const jits:Returntype<typeof sum>="aW