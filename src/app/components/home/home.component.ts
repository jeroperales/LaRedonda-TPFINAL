import { Component, inject, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { EquiposService } from '../../services/equipos.service';
import { Router } from '@angular/router';
import { Equipo } from '../../interfaces/equipo-interface';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{
  constructor(private equipoService: EquiposService, private router: Router) {}

nombreEquipo: string = '';

equipos: Equipo[] = [];
equiposFiltrados: Equipo[] = [];

ngOnInit(): void {
this.listarEquipos();
}


listarEquipos(){
  this.equipoService.getEquipos().subscribe({

    next: (equipos: Equipo[]) => {
      this.equipos = equipos
    },
    error:(e: Error) => {
      console.log(e.message)
    }

  })

}


filterTeams(): void {
  const query = this.nombreEquipo.trim().toLowerCase();

  if (query === '') {
    this.equiposFiltrados = []; // Clear recommendations if input is empty
    return;
  }

  this.equiposFiltrados = this.equipos.filter(equipo =>
    equipo.name.toLowerCase().includes(query)
  );
}

selectTeam(team: any): void {
  this.nombreEquipo = team.name; 
  this.equiposFiltrados = []; 
  this.buscarEquipo(); 
}

buscarEquipo(): void {
  if (this.nombreEquipo.trim() !== '') {
    this.equipoService.getEquipoByNombre(this.nombreEquipo).subscribe(
      equipo => {
        if (equipo) {
          this.router.navigate(['/detalles', equipo.id, { league: equipo.league }]);
        } else {
          console.log('Equipo no encontrado');
          alert("Equipo no encontrado");
        }
      },
      error => {
        console.error('Error al buscar el equipo:', error);
      }
    );
  }
}


}