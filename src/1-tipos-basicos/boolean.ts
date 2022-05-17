let estaAtivo: boolean;

// ..

estaAtivo = true

function mapearStatusDeUsuario(status:boolean) {
    if (status) {
        return `usuario esta ativo`
    } else {
        return `usuario nao esta ativo`
    }
}

mapearStatusDeUsuario(true);