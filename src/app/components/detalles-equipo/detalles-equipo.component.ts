import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../../interfaces/equipo-interface';
import { EquiposService } from '../../services/equipos.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

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
  usuarioService = inject(AuthService);

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
 

  addToFavorites() {
    this.usuarioService.addFavoriteTeam(this.equipo.name).subscribe((updatedUser) => {
      if (updatedUser) {
        alert(`¡${this.equipo.name} ha sido agregado a tus equipos favoritos!`);
      } else {
        alert("Hubo un error al agregar el equipo favorito.");
      }
    });
  }
  removeFavoriteTeam() {
    this.usuarioService.removeFavoriteTeam().subscribe((updatedUser) => {
      if (updatedUser) {
        alert(`¡El equipo ha sido eliminado de tus favoritos!`);
      } else {
        alert("Hubo un error al eliminar el equipo favorito.");
      }
    });
  }
  
  
}



