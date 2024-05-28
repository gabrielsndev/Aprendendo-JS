function contar(){
    var inicio = window.document.getElementById('iini')
    var fim = window.document.getElementById('ifim')
    var passo = window.document.getElementById('ipas')
    var res = window.document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if(passo == 0){
            window.alert('Passo inválido! considerando Passo 1')
            passo = 1
        }

        //Contagem crescente
        if(i < f){
            for(var c = 0; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }else{
            //contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}