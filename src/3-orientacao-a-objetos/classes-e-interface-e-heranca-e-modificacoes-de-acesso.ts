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
const jogador = new Player('Anna', 25, 'Red Dead Redemption 2');
console.log(jogador.dizeroJogoAtual())
console.log(Player.queHorasSao())

  // static