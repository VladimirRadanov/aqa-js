const numbersList = [1,10,14,2,4,5,43,34,-5,200,5,5000]

const copiedArray = [...numbersList]
copiedArray.sort((a, b) => a - b)
console.log(copiedArray)