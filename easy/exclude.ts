
type Type1={
    name:string;
    address:string
}

type Type2={
    name:string;
    roll:string;
}

const n:Extract<Type1,Type2>=null;