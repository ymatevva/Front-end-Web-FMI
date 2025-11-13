

// Task 1
function sumOdd(num) {
    let res = 0;
    for (let index = 0; index <= num; index++) {
        if (index % 2 != 0) {
            res += index;
        };
    }
    return res;
}

// Task 2

function printNumbers(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] instanceof Array) {
            for (let j = 0; j < numbers[i].length; j++) {
                console.log(numbers[i][j]);
            }
        } else {
            console.log(numbers[i]);
        }
    }
}

// Task 3

// this returns set 
function getUniueValues(numbers) {
    let setVal = new Set();

    for (let index = 0; index < numbers.length; index++) {
        setVal.add(numbers[index]);
    }
    return setVal;
}

// if we want to get array with unque values:

function getUnique(numbers) {
    return [...new Set(numbers)];
}

// Task 4

function countChar(ch, word) {

    let count = 0;
    for (const element of word) {
        if (element === ch) {
            count++;
        }
    };
    return count;
}

// Task 5

function reverseStr(word) {
    for (let index = 0; index < word.length / 2; index++) {
        let tmp = word[index];
        word[index] = word[word.length - index - 1];
        word[word.length - index - 1] = tmp;
    }
    return word;
}

// can be also done with split(" ").reverse().join(" ");


function transform(strArray) {

    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = reverseStr(strArray[i]);
        if (strArray[i].length > 5) {
            strArray[i] = strArray[i].toUpperCase();
        }
    }
}
// can be also done with 

function transf(strArr) {
    strArr = strArr.map(word => {
      const rev = word.split(" ").reverse().join(" ");
      return rev.length > 5 ? rev.toUpperCase() : rev;
    });
    return strArr;
}
// Task 6 
function isPal(word) {

    for (let index = 0; index < word.length / 2; index++) {
        if (word[index] != word[word.length - index - 1]) {
            return false;
        }
    }
    return true;
}

// Task8 
function effect(cars) {
    let brand = "";
    let model = "";
    let maxEf = 0;

    for (const car of cars) {
        if (car.mpg / car.price > maxEf) {
            maxEf = car.mpg / car.price;
            brand = car.brand;
            model = car.model;
        }
    }
    return brand + " " + model;
}

// Task 9

function calculator(operation) {
    return function(num1, num2) {
        switch(operation){
            case 'sum': return num1 + num2;
            case 'division' : return num2 === 0 ? "Division by zero is not valid": num1/num2;
            case "diff" : return num1 - num2;
            case "mult": return num1 * num2;
            default: return "Invalid operation.";
        }
    };
}
console.log(sumOdd(8));
console.log(isPal("heleih"));

const division = calculator("division");
console.log(division(1,0));