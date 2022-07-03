export class Podio {
    juegoId: String;
    carrilId: String;
    carroId: String;
    fechaInicio: Date;
    fechaFin: Date;
    distanciaJuego: String;
    tiempoRecorrido: String;

    constructor(juegoId: String, carrilId: String, carroId: String, fechaInicio: Date, fechaFin: Date, distanciaJuego: String, tiempoRecorrido: String) {
        this.juegoId = juegoId;
        this.carrilId = carrilId;
        this.carroId = carroId;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.distanciaJuego = distanciaJuego;
        this.tiempoRecorrido = tiempoRecorrido;
    }
}