'use strict';
let a,b;
// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
let arr = ['a', 'b', 'c', 'd'];

a = arr.splice(0, 2)
b = arr.splice(-2, 2)
a = a.join('+');
b = b.join('+');
arr = arr.concat(a,b);
arr = arr.join(',');
console.log(arr);

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
arr = [2, 5, 3, 9];

a = arr.splice(0, 2)
b = arr.splice(-2, 2)
a = a[0] * a[1];
b = b[0] * b[1];

arr = arr.concat(a,b);
console.log(arr);

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

for (let item of arr) {
    if (item === 4) {
         console.log('Number 4')
    } else if (Array.isArray(item)) {
        for (let i of item) {
            if (i === 4) {
                console.log('Number 4');
            }
        }
    }
}

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
arr = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}

for (let key in arr) {
    if (key === 'jQuery') {
        console.log('jQuery')
    } else if (Array.isArray(arr[key])) {
        for (let i of arr[key]) {
            if (i === 'jQuery') {
                console.log('jQuery')
            }
        }
    }
}

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
arr = [];
a= [];

for(let i = 0; i < 10; i++) {
     arr.push(a +='x');
}
console.log(arr);

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
arr = [];

for (let i=1; i<5; i++) {
    a = '';
    for (let j=1; j<=i; j++) {
        a += i;
    }
    arr.push(a);
}
console.log(arr);

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
arr = [];

function arrayFill(item, index) {
    for(let i = 0; i < index; i++) {
        arr.push(item)
    }
    return arr;
}
console.log(arrayFill(215, 4));

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
arr = [4, 2, 3, 9, 12, 2, 3];
let sum = 0;

for( let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(sum > 10) {
        sum = i+1;
        break;
    }
}
console.log(sum);

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
arr = [4, 2, 3, 9, 12, 2, 3];

for( let i = 0; i < arr.length; i++) {
    arr.unshift(arr[i]);
    arr.splice(i+1, 1);
}
console.log(arr);

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
arr = [[1, 2, 3], [4, 5], [6]];

arr = arr.flat();
a = arr.reduce(function (acc, item){
        acc +=item;
        return acc;
    },
    0
)
console.log(a);

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

arr = arr.flat(2);
a = arr.reduce(function (acc, item){
    acc +=item;
        return acc;
},
0
)
console.log(a);