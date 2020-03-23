//alert button
const alertButton = document.getElementById('mybutton');
alertButton.addEventListener('click', function () {
    alert('Button clicked');
})
//background toggle
const backgroundButton = document.getElementById('changebackground');
backgroundButton.addEventListener('click', function () {
    document.body.classList.toggle('red-background');
})