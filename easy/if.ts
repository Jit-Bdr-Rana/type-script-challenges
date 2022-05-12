type If<C extends boolean,T,F>=C extends true?T:F



const Example:If<true,'a','b'>="a";
const Example2:If<false,'a','b'>='b';