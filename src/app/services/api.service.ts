import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://v3.football.api-sports.io/';

  private headers = new HttpHeaders({
    'x-rapidapi-key': '', // PONER CLAVE ACA
  });

  constructor(private http: HttpClient) {}

  // Method to get active leagues
  getActiveLeagues() {
    return this.http.get(`${this.apiUrl}leagues?current=true`, {
      headers: this.headers
    });
  }

  // Existing method to get standings
  getStandings(leagueId: number, season: number) {
    return this.http.get(`${this.apiUrl}standings?league=${leagueId}&season=${season}`, {
      headers: this.headers
    });
  }
}


