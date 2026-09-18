function divide (numerator, denominator) {
    if (denominator === 0)
        throw new Error("Denominator cannot be zero");
    if (typeof numerator !== 'number' ||
        typeof denominator !== 'number')
        throw new Error("Both numerator and denominator must be numbers");
    return numerator / denominator;
}

function tryDivide(numerator, denominator) {
    try {
        console.log(divide(numerator, denominator));
    } catch (error) {
        console.error("Error occured:", error.message);
    } finally {
        console.log("Робота завершена");
    }
}

tryDivide(10, 2);
tryDivide(10, 0); 
tryDivide(10, 'a');
tryDivide("test", 5);
tryDivide(0, 5);
tryDivide('b', 0);