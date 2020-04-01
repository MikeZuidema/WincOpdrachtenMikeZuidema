//Functie 1
function sum(...numbers) {
    return numbers.reduce(function (prev, current) {
        return prev + current
    });
};

console.log(sum(5, 5, 5));

//Functie 2
const sum2 = function (num1, num2, num3) {
    return num1 + num2 + num3;
};

const cijfers = [1, 2, 3];

console.log(sum2(...cijfers));