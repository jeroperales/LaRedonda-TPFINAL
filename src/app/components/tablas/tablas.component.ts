import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css'],
})


export class TablasComponent  {
  
  
/*   //FETCH DE LA API https://football98.p.rapidapi.com
  leagues = [
    { name: 'Liga Profesional Argentina', code: 'ligaprofesionalargentina' },
    { name: 'Premier League', code: 'premierleague' },
    { name: 'Serie A', code: 'seriea' },
    { name: 'La Liga', code: 'laliga' }
  ];

  data: { [key: string]: any } = {}; // Guarda la info al cargar la liga
  loading: { [key: string]: boolean } = {};
  errors: { [key: string]: string | null } = {};

  constructor(private apiService: ApiService) {}

   ngOnInit(): void {
    // fetch de la api
    this.leagues.forEach(league => {
      this.loading[league.code] = true; // ejecuta estado del loading
      this.apiService.fetchData(league.code, 'table').subscribe(
        (response) => {
          console.log("API response for", league.name, response);
          this.data[league.code] = response;
          this.loading[league.code] = false; // saca el loading una vez se carga
        },
        (err) => {
          this.errors[league.code] = 'No se pudo fetchear la informacion de la liga ' + league.name;
          this.loading[league.code] = false; 
          console.error('Error fetching para', league.name, err);
        }
      );
    });
  }  */

}


