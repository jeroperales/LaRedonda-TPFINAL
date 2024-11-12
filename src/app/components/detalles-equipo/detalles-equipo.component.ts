import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../../interfaces/equipo-interface';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-detalles-equipo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalles-equipo.component.html',
  styleUrl: './detalles-equipo.component.css'
})
export class DetallesEquipoComponent implements OnInit{

  route: ActivatedRoute = inject(ActivatedRoute);
  equipoService = inject(EquiposService);

  equipo: any = null;
  idEquipo = 0;

  constructor(){
    this.idEquipo = Number(this.route.snapshot.params['id']);
  };

  ngOnInit(): void {
    // Llamamos al método getEquipoByID y suscribimos para obtener los datos
    this.equipoService.getEquipoByID(this.idEquipo).subscribe({
      next: (equipo) => {
        this.equipo = equipo; // Asignamos el equipo recibido
      },
      error: (err) => {
        console.error('Error al obtener el equipo:', err);
      }
    });
  }
}



