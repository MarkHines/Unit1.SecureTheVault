let code1;
code1 = 3 + 7

let code2 = 800 / 4 - 160;
// console.log(code2);

let code3 = 15 % 4 + 36
// console.log(code3);

let message = `The vault has been secured. The combination is: `;
let codeA = code1 + `-` + code2 + `-` + code3;
let codeB = `${code1}-${code2}-${code3}`;

console.log(message);
console.log(codeA);
console.log(codeB);