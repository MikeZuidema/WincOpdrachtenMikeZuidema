let navContent = document.getElementById("content");
let buttonToggle = document.getElementById('buttonjs');
//visibility lijst
buttonToggle.addEventListener('click', function () {
    if (navContent.style.visibility === 'hidden') {
        navContent.style.visibility = 'visible';
    } else {
        navContent.style.visibility = 'hidden';
    }
});
//kleuren toggles
let bodyColor = document.getElementById('body');
const homeToggle = document.getElementById('homeButton');
const redToggle = document.getElementById('redButton');
const blueToggle = document.getElementById('blueButton');
const orangeToggle = document.getElementById('orangeButton');
const greenToggle = document.getElementById('greenButton');

homeToggle.addEventListener('click', function () {
    bodyColor.style.backgroundColor = 'grey';
    navContent.style.visibility = 'hidden';
});
redToggle.addEventListener('click', function () {
    bodyColor.style.backgroundColor = 'red';
    navContent.style.visibility = 'hidden';
});
blueToggle.addEventListener('click', function () {
    bodyColor.style.backgroundColor = 'blue';
    navContent.style.visibility = 'hidden';
});
orangeToggle.addEventListener('click', function () {
    bodyColor.style.backgroundColor = 'orange';
    navContent.style.visibility = 'hidden';
});
greenToggle.addEventListener('click', function () {
    bodyColor.style.backgroundColor = 'green';
    navContent.style.visibility = 'hidden';
});
//test changes