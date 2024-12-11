console.log("decision making");

// iff and if else
let temp = 23;
if (temp >= 25) {
    console.log("its hot");
    
}
else {
    console.log("its cold");
    
}

var itsRaining = false;
if (itsRaining) {
    console.log("Take an umbrela");
    
} 
else{
    console.log("no need to take an umbrela");
    
}

// Else if

let time = 8;

if(time < 9){
    console.log("Good morning");
    
}
else if (time < 14){
    console.log("Good afternoon");
    
}
else {
    console.log("good evening");
}


//Nested if statement

let yourWithParent = true;
let age = 21;
let yourId = true;

if(yourWithParent){
    console.log("you can enter the mall");
    
} else
if(age>= 18) {
    console.log("you can watch the movie");
    if(yourId){
        console.log("you can enter parking");
        
    }
    
}