//promise

const order = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        resolve("success")
    }, 1000)
})
order.then(console.log();
)