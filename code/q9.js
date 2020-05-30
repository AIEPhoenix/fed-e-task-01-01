const a = Promise.resolve("hello")
const b = Promise.resolve("lagou")
const c = Promise.resolve("I ❤️ U")
Promise.all([a,b,c]).then((result)=>{
    console.log(result.join(' '))
})