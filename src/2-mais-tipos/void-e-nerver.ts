function principal(): void {
    console.log('executanto')
}

principal()

// laços de repetição infinitos
// ou funções que disparam erros
function funcaoQueNuncaRetorna(): never {
    throw new Error('ola')
}

const a = funcaoQueNuncaRetorna