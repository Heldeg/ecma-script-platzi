const array = [1, 2, 4, 43, [1, 3, 4, 5, [12, 3, 4, 56]]]

console.log(array.flat(2));

// flatmap

const array2 = [1 ,2 , 3 ,4, 5];
console.log(array2.flatMap(v => [v,v*2, v*3]));