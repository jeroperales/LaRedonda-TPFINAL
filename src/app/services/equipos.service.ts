import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../interfaces/equipo-interface';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  http = inject(HttpClient);

  urlBase = 'http://localhost:3000/equipos'


    //GET
    getEquipos(): Observable<Equipo[]>{
      return this.http.get<Equipo[]>(this.urlBase);
    }

    //POST
    postEquipo(equipo: Equipo): Observable<Equipo>{
      return this.http.post<Equipo>(this.urlBase, equipo);
    }

    //PUT
    putEquipo(id: number, equipo: Equipo): Observable<Equipo> {
      return this.http.put<Equipo>(`${this.urlBase}/${id}`, equipo);
    }

    //DELETE
    deleteEquipo(id: number): Observable<void> {
      return this.http.delete<void>(`${this.urlBase}/${id}`);
    }
  

}
