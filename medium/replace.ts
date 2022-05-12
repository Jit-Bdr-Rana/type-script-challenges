
type Replace<T extends string,F extends string,S extends string>=T extends `${infer Front}${F}${infer Back}`?`${Front}${S}${Back}`:T;





type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
