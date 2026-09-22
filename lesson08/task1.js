const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

let positiveCount = 0
let negativeCount = 0
let zeroCount = 0

function countNumberTypes(numbers) {
    for (let i = 0; i<numbers.length; i++) {
        numbers[i] > 0 ? positiveCount++ 
        : numbers[i] < 0 ? negativeCount++
        : numbers[i] === 0 ? zeroCount++
        : null
    }
}
function printResults(positiveCount, negativeCount, zeroCount) {
    console.log(`Positive numbers: ${positiveCount}`);
    console.log(`Negative numbers: ${negativeCount}`);
    console.log(`Zero numbers: ${zeroCount}`);
}

countNumberTypes(numbers);
printResults(positiveCount, negativeCount, zeroCount);