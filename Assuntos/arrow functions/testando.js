const idade = 18

function dirigir(idade) {
    if(idade > 17){
        console.log('pode dirigir')
    }else{
        console.log('não pode dirigir')
    }
}

dirigir(idade)

const dirigir2 = (idade) =>{
    if(idade > 17){
        console.log('pode dirigir')
    }else{
        console.log('não pode dirigir')
    }
}

dirigir2(idade)