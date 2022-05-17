enum Permissoes {
    admin, editor, comum
}

enum Cores {
    red = '#ff0000'
}

const usuario = {
    perfil: Cores.red,
    nível: Permissoes.admin,
};

console.log(usuario)