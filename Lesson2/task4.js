// ###7 Сравнить null и 0. Попробуйте объяснить результат. 
let c = null
let d = 0
console.log(null > 0); // false    Абстрактный алгоритм сравнения для отнощений      т.к. null преобразуется в 0
console.log(null == 0); // false   Абстрактный алгоритм сравнения для равенств
console.log(null >= 0); // true    если null < 0 принимает значение false, то в остальных случаях true