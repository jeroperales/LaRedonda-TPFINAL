import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tablas',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})


export class TablasComponent implements OnInit
{   
  
  standings: any[] = [];

  constructor(private apiService: ApiService) {}

  activeLeagues = [
    { id: 128, name: 'Liga Argentina', season: 2022 },
    { id: 39, name: 'Premier League', season: 2022 }, // Update the season as needed
    { id: 135, name: 'Serie A', season: 2022 },
    { id: 140, name: 'La Liga', season: 2022 }
  ];

  ngOnInit(): void {
    // Iterar sobre las ligas definidas en activeLeagues
    this.activeLeagues.forEach((league) => {
      const leagueId = league.id;
      const season = league.season;

      // Obtener posiciones para cada liga
      this.apiService.getStandings(leagueId, season).subscribe(
        (data: any) => {
          const leagueData = {
            name: league.name,
            table: data.response[0]?.league?.standings[0] || [] // Ajusta esto según la estructura de tu respuesta
          };
          this.standings.push(leagueData);
        },
        error => {
          console.error('Error al cargar las posiciones para ${league.name}:', error);
        }
      );
    });
  } 

}




  
