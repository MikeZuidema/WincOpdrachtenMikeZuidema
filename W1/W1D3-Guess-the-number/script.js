//welcome prompt
let name = prompt('What is your name?', 'name');
alert(`Welcome ${name}!`);
let user = name;
//guess the number
const min = 1;
const max = 25;
const maxTries = 0;
const rightAnswer = Math.floor(Math.random() * (max - min + 1)) + min;
let counter = 4;
let userNumber = prompt('Guess the number! between 0 and 25 (5 attempts)', 25)

while (userNumber != rightAnswer) {
    let wrong = alert('Wrong! try again. you have:' + counter + ' more tries');
    let userNumber = prompt('Guess the number! between 0 and 25 ', 25);
    counter -= 1;

    if (counter <= maxTries) {
        const youLost = alert('YOU LOST! thanks for playing ' + user);
        break
    }
    if (userNumber == rightAnswer) {
        const youWin = alert('YOU WON! thanks for playing ' + user);
        break
    }


}