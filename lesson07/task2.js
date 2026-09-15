function recussion(num) {
    console.log(num);
    return num <= 0 ? 0 : recussion(--num);
}

recussion(5);