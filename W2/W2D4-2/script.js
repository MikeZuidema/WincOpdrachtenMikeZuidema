const lionId = document.getElementById("lionButton")
const leopardId = document.getElementById("leopardButton")
const elephantId = document.getElementById("elephantButton")
const rhinoId = document.getElementById("rhinoButton")
const buffaloId = document.getElementById("buffaloButton")

const dierenClicked = document.getElementById("test").getElementsByTagName("ul")[0];
const dierenList = document.getElementById("testTop").getElementsByTagName("ul")[0];
const child = dierenList.getElementsByTagName("li")[0];


//Lion
lionId.addEventListener('click', function () {
    dierenClicked.appendChild(newLi);
    newLi.appendChild(newA);
    newA.innerHTML = "Lion";
    dierenList.removeChild(child);
});
//Leopard
leopardId.addEventListener('click', function () {
    console.log(clickFunction)
});
//Elephant
elephantId.addEventListener('click', function () {
    console.log(clickFunction)
});
//Rhino
rhinoId.addEventListener('click', function () {
    console.log(clickFunction)
});
//Buffalo
buffaloId.addEventListener('click', function () {
    console.log(clickFunction)
});

//add element

const newLi = document.createElement("li");
const newA = document.createElement("a");




//buttons
const clickLion = function (value) {
    console.log(value)
}

const lionFunction = function () {

}