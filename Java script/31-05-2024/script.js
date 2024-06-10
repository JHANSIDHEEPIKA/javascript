let kid = {
    name : 'Priyaansh',
    age : '3',
    DOB: 2021,
    Birthday: 'Nov1',
    nickname: 'minnu'
};
// for in loop for objects

 for (let kidinfo in kid ){
    let individualValues = kid[kidinfo]
    console.log(kidinfo, individualValues)
}
// Math
let minValue = Math.min(50, 70);
console.log(minValue)

let maxValue = Math.max(150, 170);
console.log(maxValue);

let number = 1089;
let checkSqrt = Math.sqrt(number);
console.log(checkSqrt);

let tan = Math.sin(45);
console.log(tan);

let Term = Math.abs(540);
console.log(Term);

//Round
let vivo = 19599.54;
let finalPrice = Math.round(vivo);
console.log(finalPrice);

//floor
let frame = 599.69;
let framePrice = Math.floor(frame);
console.log(framePrice);

//ceil
let kurti = 1993.25;
let kurtiPrice = Math.ceil(kurti);
console.log(kurtiPrice)


//random
let random = Math.random()*650;
let value = Math.floor(random);
console.log(value);

let myHeading = document.getElementById('js');

function changeColor(){
    let random1 = Math.random() * 255;
    let actualValue = Math.floor(random1);
    let random2 = Math.random() * 255;
    let actualValue2 = Math.floor(random2);

    let random3 = Math.random() * 255;
    let actualValue3 = Math.floor(random3);

     document.button.style.Color = `rgb(${actualValue}, ${actualValue2}, ${actualValue3})`
     console.log(random1,random2,random3)
}



    
function changeColor(){

let random1 = Math.random() * 255;
    let actualValue = Math.floor(random1);
    let random2 = Math.random() * 255;
    let actualValue2 = Math.floor(random2);

    let random3 = Math.random() * 255;
    let actualValue3 = Math.floor(random3);

     document.body.style.backgroundColor = `rgb(${actualValue}, ${actualValue2}, ${actualValue3})`
     console.log(random1,random2,random3)
}


