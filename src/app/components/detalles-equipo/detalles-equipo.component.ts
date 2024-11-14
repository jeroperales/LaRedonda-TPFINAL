import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../../interfaces/equipo-interface';
import { EquiposService } from '../../services/equipos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-equipo',
  standalone: true,
  imports: [RouterModule,
    CommonModule
  ],
  templateUrl: './detalles-equipo.component.html',
  styleUrl: './detalles-equipo.component.css'
})
export class DetallesEquipoComponent implements OnInit{

  currentLeague: string | null = null;

  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  equipoService = inject(EquiposService);

  equipo: any = null;
  idEquipo = 0;

  constructor(){
    this.idEquipo = Number(this.route.snapshot.params['id']);
    
    this.currentLeague = String(this.route.snapshot.params['league']);

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

  //RECIBE LIGA Y LO DEVUELVE A ESE SI SE APRETA EL BOTON VOLVER
  goBack(): void {
    if (this.currentLeague) {
      this.router.navigate(['/equipos/', this.currentLeague]);
    } else {
      this.router.navigate(['/home']);
    }
  }
}



