
type Letters={
 A:'a',
 B:'b',
 C:'c',
 D:'d',
 E:'e',
 F:'f',
 G:'g',
 H:'h',
 I:'i',
 J:'j',
 K:'k',
 L:'l',
 M:'m',
 N:'n',
 O:'o',
 P:'p',
 Q:'q',
 R:'r',
 S:'s',
 T:'t',
 U:'u',
 V:'v',
 W:'w',
 X:'x',
 Y:'y',
 Z:'z'
}

type Kabab<T extends string,Initial extends boolean=true>=T extends `${infer First}${infer rest}`?First extends keyof Letters?Initial extends true? `${Letters[First]}${Kabab<rest,false>}`:`-${Letters[First]}${Kabab<rest,false>}`:`${First}${Kabab<rest,false>}`:'';


type jittt=Kabab<"RomanCivilizationToModernCivilization">