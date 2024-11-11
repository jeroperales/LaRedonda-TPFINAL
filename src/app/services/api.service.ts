import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
/* 
  
  private baseUrl = 'hhttps://football98.p.rapidapi.com'; //URL DE API


  constructor(private http: HttpClient) { }

  //FETCH DE API https://football98.p.rapidapi.com
  fetchData(championship: string, endpoint: string, additionalInfo?: string): Observable<any>{

    const url = `${this.baseUrl}/${championship}/${endpoint}${additionalInfo ? `/${additionalInfo}` : ''}`;
    const headers = new HttpHeaders({
     'X-RapidAPI-Host': 'football98.p.rapidapi.com',
      'X-RapidAPI-Key': '353e106ca1msh98d3249038d986bp177635jsn3444fe44fbca', // ACA VA LA CLAVE QUE NOS DAN EN LA PAGINA
    });

    return this.http.get(url, { headers });

} 
 */


  }


