import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Juego } from '../models/Juego';
import { Podio } from '../models/Podio';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class JuegoService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private router: Router) { }

  crearJuego(juego: any): Observable<any> {
    console.log(juego);
    return this.http.post<any>(`${base_url}/crearJuego`, juego);
  }

  inicioJuego(juegoId: any): Observable<any> {
    console.log(juegoId);
    return this.http.post<any>(`${base_url}/iniciarJuego`, juegoId);
  }

  getScore() {
    return this.http.get<Podio[]>(`${base_url}/score`);
  }
}
