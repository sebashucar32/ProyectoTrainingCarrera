import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { crearJuegoform } from '../interfaces/crearJuegoInterface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class JuegoService {
  
  constructor(private http: HttpClient, private router: Router) { }
  
  crearJuego(formData: crearJuegoform) {
    console.log(formData);
    return this.http.post(`${base_url}/crearJuego`, formData);
  }
}
