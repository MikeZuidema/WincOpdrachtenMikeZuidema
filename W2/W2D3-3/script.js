//A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }];

const filterSpiderman = (superheroFilter) => {
    return superheroFilter.find(function (superhero) {
        return superhero.name === "Spiderman";
    });
};

console.log(filterSpiderman(superheroes));

//B
const timesTwo = function (array) {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 2);
    });
    return newArray;
};
console.log(timesTwo([1, 2, 3]));

//C
const biggerThan10 = (array) => {
    return array.some(number => {
        return number > 10;
    });
};

console.log("bigger than 10 ->", biggerThan10([1, 4, 3, 6, 9, 7, 11]));

//D
const isItalyInTheGreat7 = (array) => array.includes("Italy");

console.log(isItalyInTheGreat7(["Canada", "France", "Germany", "Italy", "Japan", "United Kingdom", "United States"]));

//E
const timesTen = function (array) {
    return array.map(number => {
        return number * 10;
    });
};

console.log(timesTen([1, 4, 3, 6, 9, 7, 11]))

//F
const isBelow100 = (array) => {
    return array.every(number => {
        return number < 100;
    })
};

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))

//G
const arrayNumbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(arrayNumbers.reduce(reducer));