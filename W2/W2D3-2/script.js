//A
const arrayWithWords = ["nice", "awesome", "tof"]
const addTheWordCool = function (array) {
    array.push("cool");
    return array;
}
console.log(addTheWordCool(["nice", "awesome", "tof"]));
//B
const amountOfElementsInArray = function (array) {
    return array.length;
};
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

//C
const selectBelgiumFromBenelux = (array) => array[0];
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

//D
const lastElementInArray = (array) => array[array.length - 1];
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

//E Zo te zien zijn jullie niet zo gek op trump XD
const presidents = ["Rutte", "Obama", "Bush", "Clinton"];

const impeachRutteSlice = function (array) {
    const newArray = array.slice(1, 4);
    return newArray;
};
console.log(impeachRutteSlice(presidents));

//F
const stringsTogether = (array) => {
    return array.join(" ");
};
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

//G
//combineArrays([1,2,3], [4,5,6]) 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2);
console.log(combined);