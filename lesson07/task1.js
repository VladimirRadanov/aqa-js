function handleNum(num, handleEven, handleOdd) {
    num %2 === 0 ?
        handleEven(num) :
        handleOdd(num);
}


const handleEven = (num) => console.log(`The number ${num} is even.`);
const handleOdd = (num) => console.log(`The number ${num} is odd.`);

handleNum(4, handleEven, handleOdd);
handleNum(7, handleEven, handleOdd);