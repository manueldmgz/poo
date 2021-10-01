class Pokemon {

    #name = "";
    #type = "";
    #evolutions = [];

    constructor(name, type, evolutions) {
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;

    }


    set name (name) {
        if (name == '') {
            this.#name = "No existe"
        }
        this.#name = name
    }

    set type(type) {
        this.#type = type;
    }

    set evolutions(evolutions) {
        this.#evolutions = type;
    }


    get name() {
        return this.#name;
    }

    get type() {
        return this.#type;
    }

    get evolutions () {
        return this.#evolutions;
    }

    attack() {
        return `${this.#name}, está atacando`;
    }

    evolve(evolution = 0) {
        // Valida que la opción exista
        const EVOLVE = this.#evolutions[evolution] || '';
        let message = "No puedo evolucionar :(";

        if(EVOLVE) {
            message = `${this.#name} está evolucionando a ${EVOLVE}`
            this.#name = EVOLVE;
        }

        return message;
    }

}

class TypeFire extends Pokemon {
    
    constructor(name, evolutions) {
        super(name, "fire", evolutions);
    }

    message() {
        return `Hola, soy ${this.name} y soy de tipo fuego`;
    }
}

const charmander = new TypeFire("Charmander", ["Chareleon", "Charizard"]);
charmander.name = "Gato";
console.log(charmander.message());