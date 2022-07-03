export class Juego {
    jugador1: String;
    jugador2: String;
    jugador3: String;
    kilometros: number;
    juegoId: String;

    constructor(jugador1: String, jugador2: String, jugador3: String, kilometros: number, juegoId: String) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.jugador3 = jugador3;
        this.kilometros = kilometros;
        this.juegoId = juegoId;
    }
}