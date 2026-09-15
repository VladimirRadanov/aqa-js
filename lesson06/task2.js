function isAdult(age) {
    return age >= 18 ? true : false;
}

function logIsAdult(isAdult) {
    console.log(isAdult ? 'You are an adult.' : 'You are not an adult.');
}

logIsAdult(isAdult(25));
logIsAdult(isAdult(15));