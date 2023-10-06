class Heroi {
    constructor(nome, idade, tipo) {
        this._nome = nome;
        this._idade = idade;
        this._tipo = tipo;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set idade(idade) {
        this._idade = idade;
    }

    get idade() {
        return this._idade;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }

    tipoPersonagem() {
        const tipos = {
            1: "guerreiro",
            2: "mago",
            3: "monge",
            4: "ninja"
        };
        return tipos[this.tipo] || "desconhecido";
    }

    tipoDeAtaque() {
        const ataques = {
            1: "espada",
            2: "magia",
            3: "reza",
            4: "shuriken"
        };
        return ataques[this.tipo] || "desconhecido";
    }

    atacar() {
        return `O ${this.tipoPersonagem()} atacou usando ${this.tipoDeAtaque()}`;
    }
}

const heroi = new Heroi("Jose", 33, 2);
console.log(heroi.atacar());
