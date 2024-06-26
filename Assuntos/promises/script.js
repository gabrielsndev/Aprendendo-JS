//Criação de uma Promessa

const myPromise = new Promise((resolve, reject)=>{

    const nome = "Matheus"

    if(nome === "Matheus"){
        resolve('Usuário Matheus encontrado')
    }else{
        reject('O usuário Matheus não foi encontrado')
    }

})

myPromise.then((data) => {
    console.log(data)
})

//Encadeamento de then's

const myPromise2 = new Promise((resolve, reject)=>{

    const nome = "Matheus"

    if(nome === "Matheus"){
        resolve('Usuário Matheus encontrado')
    }else{
        reject('O usuário Matheus não foi encontrado')
    }

})

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringmodificada) => {
    console.log(stringmodificada)
})


//Retorno do Catch

const myPromise3 = new Promise((resolve, reject)=>{

    const nome = "João"

    if(nome === "Matheus"){
        resolve('Usuário Matheus encontrado')
    }else{
        reject('O usuário Matheus não foi encontrado')
    }

})

myPromise3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro')
})

//Resolver várias promessas

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{ 
        resolve('P1 ok! TimeOut')
    }, 2000)
})

const p2 = new Promise((resolve, reject) =>{
    resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) =>{
    resolve('P3 ok!')
})

const resolveall = Promise.all([p1, p2, p3]).then((data) =>{
    console.log(data)
})


//Metodo Race

const p4 = new Promise((resolve, reject) =>{
    setTimeout(() =>{ 
        resolve('P4 ok! TimeOut')
    }, 2000)
})

const p5 = new Promise((resolve, reject) =>{
    resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) =>{
    resolve('P6 ok!')
})

const resolveAllRace = Promise.race([p4, p5 ,p6]).then((data) =>{
    console.log(data)
})




