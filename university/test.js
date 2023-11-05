new Map();

//перебирающие методы
const array = [1, -2, 3, 4]
array.map((value, index) => {
    return value + index
})
array.forEach((value, index) => {
    array[index] = value + index
})
array.some((value, index) => {
    return value === 1
})
array.every((value, index) => {
    return value === 1
})
const newValue = array.find((value, index) => {
    return value === 1
})
array.filter((value, index) => {
    return value > 0
})
/*const sum = array.reduce((accum: number[], value, index) => {
    accum.push(value)
    return accum
}, [])*/

/////////////////////////////////////////////////////////////
const arr = [5, 3, 8, 1]

function findElem(array, a, b) {
    return array.filter(item => (item >= a && item <= b))
}

let filtered = findElem(arr, 3, 8)
console.log(filtered);

let str = 'my-short-string';

function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('')
}

console.log(camelize(str));