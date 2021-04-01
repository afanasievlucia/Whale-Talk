const input = 'We are the biggest mammals in the world!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
for (let x = 0; x < input.length; x++) {
//console.log(x);
//console.log(input[x]);
//console.log(input.length);
    for (let y = 0; y < vowels.length; y++) {
//console.log(y);
        if (input[x] === vowels[y]) {
            if (input[x] === "e") {
                resultArray.push("ee");
            } else if (input[x] === "u") {
                resultArray.push("uu"); 
            } else {
                resultArray.push(input[x]);
            }
        }
    } 
} 
console.log(resultArray.join("").toUpperCase());