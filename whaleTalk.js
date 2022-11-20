let input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (i = 0; i < input.length; i++) {
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    } else if (input[i] === 'u') {
    resultArray.push(input[i]);
    }
    for (y = 0; y < vowels.length; y++) {
        if (input[i] === vowels[y]) {
        resultArray.push(vowels[y]);
        }
        //console.log(y);
    }
    //console.log(i);
};

let resultString = resultArray.join('');
console.log(resultString.toUpperCase());
