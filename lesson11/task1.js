function printTextWithTimeout(text, delay) {
    setTimeout(printText, delay, text);
}

function printText(text) {
    console.log(text);
}

// Example usage:
printTextWithTimeout("Hello, world!", 2000);