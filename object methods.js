//object methods

let Box = {Name: "Naveen",
    Age: 32,
    Employed: "yes"
}
//adding data
Box.Blood_group="Onegative"
console.log(Box);

//modify
Box.Age=31;
console.log(Box);

//delete
delete Box.Employed
console.log(Box);


console.log(Object.keys(Box));
console.log(Object.values(Box));
console.log(Object.entries(Box));


