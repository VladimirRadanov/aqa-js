const originalArray = [1, 2, 3, 4, 5]

const multiplyByIndex = (arr) => {
    return arr.map((value, index) => value * index)
}

console.log(multiplyByIndex(originalArray))
console.log(originalArray)