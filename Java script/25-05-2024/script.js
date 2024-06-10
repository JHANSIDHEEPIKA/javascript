//The given number is odd or even
let num = 5;
if(num%2 == 0){
    console.log("5 is an even number")

}
else{
    console.log("5 is an odd number")
}
//The given number is positive or negative or zero.
let number = -7
if(number > 0){
    console.log("Yes it is positive integer")
}
else if(number < 0){
    console.log ("It is an negative integer")
}
else{
    console.log("I am zero")
}
//The given number is of one digited or two digited or three digited or more than three digited.
let val = 555
if(val < 10){
    console.log("I am a single digit number")
}
else if(val <100 ){
    console.log("I am a double digit number")
}
else if(val < 1000){
    console.log("I am a three digit number")
}
else{
    console.log("I am a more than three digit number")
}
//The entered number is smallest 4 digit number or not.
let value = 1000
if(value > 1000){
    console.log("I am not smallest 4 digit number")
}
else{
    console.log("I am  smallest 4 digit number")
}
//The given character is an uppercase letter or lowercase letter or a digit or a special character.
let term = '$'
if (term >= 'A' && term <= 'Z') {
    console.log("The given character is an uppercase letter.");
} else if (term >= 'a' && term <= 'z') {
    console.log("The given character is a lowercase letter.");
} else if (term >= '0' && term <= '100000000') {
    console.log("The given character is a digit.");
} else {
    console.log("The given character is a special character.");
}


//The given year is a leap year or not.
let year = 2002;
if((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)){
    console.log(year + " is a leap year")
}
else{
    console.log(year + " is not a leap year")
}
//The given number is divisible by 5 or not.
let numb = 32
if(numb % 5 == 0){
    console.log("It is divisible by 5" )
}
else{
    console.log("It is not  divisible by 5" ) 

}
//Find maximum number out of given three numbers.
let num1 = 10
let num2 = 20
let num3 = 30
let maximumNumber
if(num1 > num2 && num1 > num3) {
    maximumNumber = num1;
} else if (num2 > num1 && num2 > num3) {
    maximumNumber = num2;
} else {
    maximumNumber = num3;
}

console.log("The maximum number among " + num1 + ", " + num2 + ", and " + num3 + " is: " + maximumNumber + ".");

//Find minimum number out of given three numbers.
let val1 = 10;    
let val2 = 20;     
let val3 = 30;    

let minimum;     

if (val1 < val2 && num1 < val3) {
    minimum = val1;
} else if (val2 < val1 && val2 < val3) {
    minimum = val2;
} else {
    minimum = val3;
}

console.log("The minimum number among " + val1 + ", " + val2 + ", and " + val3 + " is: " + minimum + ".");
//Write a program that reads three positive numbers a, b, c and determines whether they can form the three sides of a triangle.




