var name = "Mr Jon"
console.log(name)
//array or objects
var users = ["Jonny", "damme", "sammer", "namin"];

console.log(users[0])
console.log(users[1])
console.log(users[2])
//Loops
for(var i =0; i<4; i++){
    console.log(users[i]);
}

//functions
var user = [
    {name: "pewds", age: 22},
    {name: "ram", age: 24},
    {name: "Krishna", age: 12},
    {name: "Ramsingh", age: 30}
];

for(var i=0; i<user.length; i++){
    console.log(user[i].name + " age is " + user[i].age)
}

//functions- 
console.log("functions work here")
function printAllusers(user){
    
for(var i=0; i<user.length; i++){
    console.log(user[i].name + " age is " + user[i].age)
}
}

printAllusers(user);

function sumAll (startindex, endindex){
    var sum =0;
    for(var i=startindex; i<endindex; i++){
        sum = sum + i;
    }
    return sum
}

var sumValue = sumAll(1, 101);
console.log("sum is ", sumValue);



// function can take other function as functions

function multiply(index1, index2){
    return index1*index2;
}
 

function divide(index1, index2){
    return index1/index2;
}
 
function add(index1, index2){
    return index1+index2;
}
 
function subtract(index1, index2){
    return index1-index2;
}
 

function doArithmetic(firstEl, secondEl, arithmeticFun){
    return arithmeticFun(firstEl, secondEl);
}

var answer = doArithmetic(1, 4, multiply);
console.log(answer);
 

//Patterns

function createPattern(numberofRows){
    for(var i=0; i<numberofRows; i++){
        var stringToPrint = "";
        for(var j=0; j<i+1; j++){
            stringToPrint = stringToPrint + "*";
        }
        console.log(stringToPrint)
    }
}

createPattern(10)

