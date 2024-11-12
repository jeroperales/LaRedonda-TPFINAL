import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Equipo } from '../../interfaces/equipo-interface';
import { EquiposService } from '../../services/equipos.service';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [RouterModule, HomeComponent],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})
export class EquiposComponent implements OnInit{

  ngOnInit(): void {
    this.listarEquipos()
  }

  listEquipos: Equipo [] = [];


  equipoService = inject(EquiposService)

  listarEquipos(){
    this.equipoService.getEquipos().subscribe({

      next: (equipos: Equipo[]) => {
        this.listEquipos = equipos
      },
      error:(e: Error) => {
        console.log(e.message)
      }

    })

  }


}
