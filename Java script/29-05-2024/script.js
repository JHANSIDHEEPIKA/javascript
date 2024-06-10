//function declaration
function favouritePlaces(){
    let place = "araku"
    let place2 = "kashmir"
    
    console.log(`Favourite place are ${place} and ${place2}`); 
}
favouritePlaces();
//function expression
let fullPage = function(){
    for(let i = 1; i < 16; i++){
        console.log(`value of i is ${i}`)
    }
}
fullPage();
//arrow function
let friend = () => {
        if(true){
            console.log("you are Going.....");
        }
    
}
    
friend();
const fullName = (firstName, secondName, age = 10) => {
    return `My name is ${firstName} ${secondName} my age is ${age}`;
}



let result = fullName("Priyaansh", "Malliboyina", 2);
console.log(result)
const response = fullName("Rakesh", "Borusu", 24);
console.log(response);
const name  = fullName("Bhavani", "Kadiyam");
console.log(name);
let person = fullName("Jhansi", "Kadiyam");
console.log(person);


let myHeading = document.getElementById('js');




function changeName(){
    myHeading.textContent = "React JS";
}

