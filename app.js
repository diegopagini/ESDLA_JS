/** @format */

class Jugador {
	nombre;
	vida;
	poder;
	constructor(nombre) {
		this.nombre = nombre;
		this.vida = 100;
		this.poder = 100;
	}

	curar(jugadorObjetivo) {
		if (this.poder >= 40) {
			this.poder -= 40;
			jugadorObjetivo.vida += 20;
		} else {
			console.info(`${this.nombre} no tiene más poder.`);
		}
	}

	atacar(jugadorObjetivo) {
		if (jugadorObjetivo.vida > 40) {
			jugadorObjetivo.vida -= 40;
		} else {
			jugadorObjetivo.vida = 0;
			console.error(`${jugadorObjetivo.nombre} esta muerto`);
		}
	}
}

let Gandalf = new Jugador('Gandalf');
let Legolas = new Jugador('Legolas');
Gandalf.curar(Legolas);
// Jugador {nombre: "Gandalf", vida: 100, poder: 60} Jugador {nombre: "Legolas", vida: 120, poder: 100}
Legolas.atacar(Gandalf);
// Jugador {nombre: "Gandalf", vida: 60, poder: 100} Jugador {nombre: "Legolas", vida: 100, poder: 100}

console.log(Gandalf, Legolas);
