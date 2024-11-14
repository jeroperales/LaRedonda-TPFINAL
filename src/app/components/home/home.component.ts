import { Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { EquiposService } from '../../services/equipos.service';
import { Router } from '@angular/router';
import { Equipo } from '../../interfaces/equipo-interface';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private equipoService: EquiposService, private router: Router) {}

nombreEquipo: string = '';

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