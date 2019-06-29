import * as storage from '/scripts/storage/favoritos.js'

const listaFavoritos = storage.listaFavoritos

export function ehFavorito(endereco){
    for (let favorito of listaFavoritos) {
        const valorFavorito = Object.values(favorito).join()
        const valorEndereco = Object.values(endereco).join()
        
        if(valorFavorito === valorEndereco) {
            return true
        }
    }
    return false
}

export function adicionaOuRemove(endereco) {
    const favorito = listaFavoritos.find(function(favorito) {
        const valorFavorito = Object.values(favorito).join()
        const valorEndereco = Object.values(endereco).join()
        
        if(valorFavorito === valorEndereco) {
            return true
        }
    })

    const temFavorito = favorito !== undefined

    if(temFavorito) {
        const posicao = listaFavoritos.indexOf(favorito)
        listaFavoritos.splice(posicao, 1)
    } else {
        listaFavoritos.push(endereco)
    }

    storage.setFavoritos(listaFavoritos)
}