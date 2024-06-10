//Write a program that pushes the vowels into an empty array
let vowels = []
vowels.push('a');
vowels.push('e');
vowels.push('i');
vowels.push('o');
vowels.push('u');

console.log(vowels);

//Write a program to separate positive and negative numbers from the array.

function separatePositiveAndNegativeNumbers(arr) {
    let positiveNumbers = [];
    let negativeNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveNumbers.push(arr[i]);
        } else {
            negativeNumbers.push(arr[i]);
        }
    }

    return {
        positiveNumbers: positiveNumbers,
        negativeNumbers: negativeNumbers
    };
}

// Example usage
let numbers = [1, -2, 3, -4, 5, -6, 0];
let separatedNumbers = separatePositiveAndNegativeNumbers(numbers);

console.log("Positive Numbers: ", separatedNumbers.positiveNumbers);
console.log("Negative Numbers: ", separatedNumbers.negativeNumbers);

//Write a program that filters that even  or odd numbers from the array



let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function separateEvenAndOddNumbers(arr) {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        } else {
            oddNumbers.push(arr[i]);
        }
    }

    return {
        evenNumbers: evenNumbers,
        oddNumbers: oddNumbers
    };
}


let separatedNumbers1 = separateEvenAndOddNumbers(numbers1);

console.log("Even Numbers: ", separatedNumbers1.evenNumbers);
console.log("Odd Numbers: ", separatedNumbers1.oddNumbers);


//4.Write a program to find how many elements exist in the array

let arr = [1, 2,['priyaansh', 3] , "bhavani", 'kia', { name : 'ajay' , age: "13" }, true, false, null, undefined];

let lenghthOfArray =arr.length;

console.log(lenghthOfArray);


//5.Write a program to loop over an array with some of the elements.

let array =['raki','jaanu','happy','shankar','chaitu'];

for(let i=0; i<array.length; i++){
    let index = array[i];
    console.log(index);
}
