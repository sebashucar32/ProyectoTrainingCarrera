import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  public formSubmitted = false;
  
  constructor(private fb: FormBuilder, private juegoService: JuegoService, private router: Router) {}
  
  public registerGame = this.fb.group({
    jugador1: ["", Validators.required],
    jugador2: ["", Validators.required],
    jugador3: ["", Validators.required],
    kilometros: ["", Validators.required]
  });
  
  ngOnInit(): void {}

  crearJuego() {
    console.log("Entro al metodo");
    this.formSubmitted = true;
    console.log(this.registerGame.value);

    if(this.registerGame.invalid) {
      return;
    }

    // Crear Juego
    /*
    this.juegoService.crearJuego(this.registerGame.value).subscribe(resp => {
      this.router.navigateByUrl('/pista');
    }, (error) => {
      console.error("Error al Crear el Juego");
    });*/
  }
}
