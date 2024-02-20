class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      const ataques = {
        mago: 'magia',
        guerreiro: 'espada',
        monge: 'artes marciais',
        ninja: 'shuriken',
      };
  
      const ataque = ataques[this.tipo] || 'atacou';
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  
  const heroi = new Heroi('Aragorn', 30, 'ninja');
  heroi.atacar(); 