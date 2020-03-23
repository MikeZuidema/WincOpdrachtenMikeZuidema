/*
makeDutchSandwich
  A slice of bread
  Butter
  Gouda cheese
*/

const makeDutchSandwich = function () {
    console.log('Get a loaf of bread');
    console.log('Put a slice of cheese on it');
    console.log('Fold the loaf of bread')
}
makeDutchSandwich()
console.log('--------------------------')

const makeSandwich = function (topping) {
    console.log('Get a loaf of bread');
    console.log('Put a slice of' + ' ' + topping + ' ' + 'on it');
    console.log('Fold the loaf of bread')
    console.log('There you go! a sandwich with:' + topping)
}
makeSandwich('Ham');
makeSandwich('Cheese');
console.log('--------------------------')

const calculateDiscountPrice = function (totalAmount, discount) {
    return Math.round(totalAmount - discount);
}
console.log(calculateDiscountPrice(100, 25));

const calculateDiscountPrice2 = function (totalAmount, discount) {

    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    }
    else {
        return totalAmount;
    }
}

console.log(calculateDiscountPrice2(26, 10));
