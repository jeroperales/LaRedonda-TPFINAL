import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://v3.football.api-sports.io/';

  private headers = new HttpHeaders({
    'x-rapidapi-key': 'b5a64fe88c06820c43c4debd1e2fc2bd', // Replace with your actual API key
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


      //FETCH DE API https://football98.p.rapidapi.com
/*   fetchData(championship: string, endpoint: string, additionalInfo?: string): Observable<any>{

    const url = `${this.baseUrl}/${championship}/${endpoint}${additionalInfo ? `/${additionalInfo}` : ''}`;
    const headers = new HttpHeaders({
     'X-RapidAPI-Host': 'football98.p.rapidapi.com',
      'X-RapidAPI-Key': '353e106ca1msh98d3249038d986bp177635jsn3444fe44fbca', // ACA VA LA CLAVE QUE NOS DAN EN LA PAGINA
    });

    return this.http.get(url, { headers });

}  */
 
  


