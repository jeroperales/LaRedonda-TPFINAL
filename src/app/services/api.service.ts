import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://v3.football.api-sports.io/';

  private headers = new HttpHeaders({
    'x-rapidapi-key': environment.apiKey, // PONER CLAVE ACA
  });

  constructor(private http: HttpClient) {}

  // Devuelve posiciones segun liga (recibe por id)
  getStandings(leagueId: number, season: number) {
    return this.http.get(`${this.apiUrl}standings?league=${leagueId}&season=${season}`, {
      headers: this.headers
    });
  }


}


