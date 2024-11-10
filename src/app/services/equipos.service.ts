import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { equipo } from '../interfaces/equipo-interface';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  http = Inject(HttpClient);

  urlBase = 'http://localhost:3000/equipos'


    //GET
   

    //POST


    //PUT


    //DELETE


}
