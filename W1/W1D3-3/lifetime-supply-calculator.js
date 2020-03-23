const calculateSupply = function (age, amountPerDay) {
    const maxAge = 100;
    const totalNeeded = (amountPerDay * 365) * (maxAge - age);
    console.log('You will need' + ' ' + totalNeeded + ' ' + 'to last you until the ripe old age of' + ' ' + maxAge);
}
calculateSupply(80, 10);
calculateSupply(10, 5.5);
calculateSupply(23, 50);