/* zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
}; */

const ikRockArrowFunctions = () => "Joe, ik rock de arrow functions!";

/*
const fivePlusSeven = function () {
    return 5 + 7
}; */

const fivePlusSeven = () => 5 + 7;

//

() => 1 + 2;

//

const myFunction = (a, b) => a + b;

//

const addFive = a => a + 5;

//Opdracht: Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}

const createObject = () => ({ greeting: "hoi" });