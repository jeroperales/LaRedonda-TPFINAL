import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../interfaces/equipo-interface';
import { map } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  http = inject(HttpClient);

  urlBase = environment.urlBase


    //GET
    getEquipos(): Observable<Equipo[]>{
      return this.http.get<Equipo[]>(this.urlBase);
    }

    //GET BY ID
    getEquipoByID(id: number): Observable<Equipo>{
      return this.http.get<Equipo>(`${this.urlBase}/${id}`)
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
    
    //GET ULTIMO ID
    getNextId(): Observable<number> {
      return this.http.get<any[]>(this.urlBase).pipe(
        map(data => {
          if (data.length === 0) return 1;
          const lastId = data[data.length - 1].id;
          return lastId + 1;
        })
      );
    }

}
