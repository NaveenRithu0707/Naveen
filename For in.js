// //For in

// let obj = {
//     employee: "Kalai",
//     id: 56,
// };

// for (let a in obj) {
//     console.log(a); //key
//     console.log(obj[a]);//value
    
    
// }

// //for of

// let obj1 = [25, 26 ,28];

// for(let b of obj1) {
//     console.log(b);
    
// }

// obj1.forEach((a, b, c) => {
//     console.log(a, b, c);
    
// });                                /// forEach




// function str1(callback) {
//     setTimeout(() => {
//         console.log("task 2 is completed");
//         callback();
//     }, 1500);
// }
// function str2() {
//     setTimeout(() => {
//         console.log("task 3 is completed");
        
//     }, 500);
// }

// str1(str2);     ////call back hell

// function task1() {
//     setTimeout(()=> {

//         console.log("This is ok");
        
//     })
// }
// function task2() {
//     setTimeout(()=> {
//         console.log("This is not ok");
        
//     })
// }

// function task3() {
//     setTimeout(()=> {
//         console.log("satisfied");
        
//     })
// }

// task1(()=> {
//     task2(()=>{
//         task3(()=> {
//             console.log("Thus completed");
            
//         })
//     })
// })
    



// //promise

// function fun1() {
//     return new Promise((resolve, rejest)=>{
//         setTimeout(()=> {
//             resolve("Task 1 is completed");
//         },5000);
//     });
// }
// function fun2() {
//     return new Promise((resolve, rejest)=>{
//         setTimeout(()=> {
//             resolve("Task 2 is completed");
//         },2000);
//     });
// }
// function fun3() {
//     return new Promise((resolve, rejest)=>{
//         setTimeout(()=> {
//             resolve("Task 3 is completed");
//         },3000);
//     });
// }

// fun1().then((value)=> {
//     console.log(value);
    
// });



//reject

function rej() {
    return new Promise((resolve, rejest)=>{
        setTimeout(()=> {
            let isCompleted = true;
            if(isCompleted) {
                resolve("You can buy")
            } else {
                reject("you cannot buy")
            }
        
        },5000);
    });
}
function rej1() {
    return new Promise((resolve, rejest)=>{
        setTimeout(()=> {
            let isCompleted = false;
            if(isCompleted) {
                resolve("You can buy")
            } else {
                reject("you cannot buy")
            }
            
        },5000);
    });
}
rej().then((value)=> {
    console.log(value);
    return rej1();
    
})
.catch((error)=> {
    console.log(error);
    
});