import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/models/Juego';
import { Podio } from 'src/app/models/Podio';
import { JuegoService } from 'src/app/services/juego.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  public juego: Juego = new Juego("", "", "", 0, "");
  podios: Podio[] | undefined;

  constructor(private juegoService: JuegoService, private router: Router, private activitedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  crearJuego() {
    let aleatorio = this.randomJuego(0, 100);
    let juegoId = "Jue-" + String(aleatorio);
    this.juego.juegoId = juegoId;

    let jugadores = {
      jugador1: this.juego.jugador1,
      jugador2: this.juego.jugador2,
      jugador3: this.juego.jugador3
    };

    let juegoEnviado = {
      kilometros: Number(this.juego.kilometros),
      juegoId: this.juego.juegoId,
      jugadores: jugadores
    }

    let idJuegoEnviado = {
      juegoId: this.juego.juegoId
    }

    // Crear Juego
    this.juegoService.crearJuego(juegoEnviado).subscribe();
    setTimeout(() => {
      this.iniciarJuego(idJuegoEnviado);
    }, 1000);

    setTimeout(() => {
      this.resultadosJuego();
    }, 12000);

    this.router.navigate(['/pista']);
  }

  iniciarJuego(juegoId: any) {
    this.juegoService.inicioJuego(juegoId).subscribe();
  }

  resultadosJuego() {
    this.juegoService.getScore().subscribe();
  }

  randomJuego(min: number, max: number) {
    return Math.floor(Math.random() * (max - min+1) + min);
  }
}
