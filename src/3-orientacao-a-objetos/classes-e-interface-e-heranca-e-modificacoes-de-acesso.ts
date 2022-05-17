// classes e interfaces e herança e modificadores de acesso
// classes e funções
class Usuario {
    public nome;
    public idade;

    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
}

// static e extends

class Player extends Usuario {
    public jogo;

    constructor(nome: string, idade: number, jogo: string) {
      super(nome, idade);

     this.jogo = jogo;
    }

    dizeroJogoAtual() {
        return `Estou jogando,no momento:${this.jogo}`;
    }
    static queHorasSao(){
        return Date();
    }
}

//const jogador = new Player('Anna', 25, 'Red Dead Redemption 2');
//console.log(jogador.dizeroJogoAtual())
//console.log(Player.queHorasSao())

// private, protected, public
// public: acessível de forma geral,dentro e fora da classe
// private: é acessível apenas dentro da classe onde o campo foi criado.
// protected: é acessivel apenas dentro da classe (e subclasses) onde o campo foi criado

class Jogo {
    public nome;

    constructor(nome: string){
        this.nome = nome;
    }
    dizerNome() {
      return `o nome do jogo é: ${this.nome}`;
    }
}
class JogoComDescricao extends Jogo {
    private descricao;

    constructor(nome: string, descricao: string) {
      super(nome);

      this.descricao = descricao;
    }
}
const ghost  = new JogoComDescricao('Ghost of Tsushima', 'É um jogo muito batuta cheio de samurai por ai');
console.log(ghost.dizerNome());

// interfaces

interface IJogoComDescricao {
    // nome: string;
    descricao: string;
    dizerNomeComDescricao(): string;
}

class JogoComDescricoes extends Jogo implements IJogoComDescricao {
    public descricao;

    constructor(nome: string, descricao: string) {
            super(nome);
            this.descricao = descricao;
    }

    dizerNomeComDescricao() {
          return `o nome do jogo é: ${this.nome}`;
    }
}