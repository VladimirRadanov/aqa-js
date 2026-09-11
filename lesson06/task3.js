function checkOrder(available, ordered) {
    if(available < ordered && ordered > 0) 
        return "Your order is too large, we don\’t have enough goods.";
    if(ordered === 0) 
        return "Your order is empty";
    if(ordered > 0 && ordered <= available) 
        return "Your order is accepted";
    return "Invalid order";
}

console.log(checkOrder(100, 50)); // Your order is accepted
console.log(checkOrder(100, 150)); // Your order is too large, we don\’t have enough goods.
console.log(checkOrder(100, 0)); // Your order is empty
console.log(checkOrder(100, -10)); // Invalid order 