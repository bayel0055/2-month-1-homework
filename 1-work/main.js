// const values = [100, 55, 15, 300, 20];

// let sum = 0;

// for (let i = 0; i < values.length; i++) {
//     sum += values[i];
// }

// console.log(sum);

//доп

const values = [100, 55, 15, 300, 20];
let sum = 0;

for (let i = 0; i < values.length; i++) {
    console.log(`${sum} + ${values[i]} = ${sum + values[i]}`);
    sum += values[i];
}

console.log(sum);