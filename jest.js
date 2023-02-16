function capitalize(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1, string.length);
}

function reverseString(string) {
    let output = '';
    for (let i = 0; i < string.length; i++) {
        output += string.charAt(string.length - 1 - i);
    }
    return output;
}  

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }
};

function caesarCipher(string, factor) {
    let output = '';
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        let isUpper = false;
        if (char.toUpperCase() === char) {
            isUpper = true;
            char = char.toLowerCase()
        }
        if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
            let letterNum = char.charCodeAt() + factor;
            if (letterNum > 122) letterNum = (letterNum - 123) + 97;
            if (isUpper === true) output += String.fromCharCode(letterNum).toUpperCase();
            else output += String.fromCharCode(letterNum);
        }
        else output += string.charAt(i);
    }
    return output;
}

function analyzeArray(array) {
    let sum = 0, i = 0, min = array[0], max = array[0];
    for (i = 0; i < array.length; i++)
    {
        sum += array[i];
        if (array[i] < min) min = array[i];
        if (array[i] > max) max = array[i];
    }
    let avg = Math.floor((sum / i) * 10);
    const dataObj = {
        average: avg / 10,
        min: min,
        max: max,
        length: array.length
    };
    return dataObj;
}

module.exports = {};
module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;
module.exports.caesarCipher = caesarCipher;
module.exports.analyzeArray = analyzeArray;