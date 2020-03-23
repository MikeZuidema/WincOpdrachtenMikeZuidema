let age = 24;
const name = 'Bram';
const totalAmount = 45;

if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting!');
}
else {
    console.log('Helaas! Geen korting!');
}
if (name == 'Sarah' || name == 'Bram') {
    console.log('U krijgt een GRATIS biertje!')
}
else {
    console.log('Helaas! geen gratis bier voor u!')
}
if (totalAmount >= 100) {
    console.log('U krijgt een gratis fles champagne!')
}
else if (totalAmount >= 50) {
    console.log('U krijgt een gratis portie nachos!')
}
else if (totalAmount >= 25) {
    console.log('U krijgt een gratis portie bitterballen!')
}