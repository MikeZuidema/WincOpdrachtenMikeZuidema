let colors = ['yellow', 'red', 'blue', 'orange'];

//While

let i = 0;

while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

console.log('-----------------');
//for

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

console.log('================');
//forEach

colors.forEach(element => console.log(element));