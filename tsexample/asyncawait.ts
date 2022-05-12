interface Todo{
    name:string;
    roll:number;
}

export const  displaywithAsync=async(params:string) => {
    const jit= await display(params)

    console.log(jit);
} 
export const  display=(params:string):Promise<Todo> => {
    
    let promises:Promise<Todo>
   
    return new Promise((resolve,reject)=>{

        const array:Todo={
            name:'jit',
            roll:5,
        }
           setTimeout(()=>{
                  resolve(array)
             },5000)
     ;
    }) ;
}

console.log("start");
 displaywithAsync("async call");
 console.log("end")