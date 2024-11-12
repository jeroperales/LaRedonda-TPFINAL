import { Component, inject, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Equipo } from '../../interfaces/equipo-interface';
import { EquiposService } from '../../services/equipos.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";
@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [RouterModule,
    CommonModule,HomeComponent
  ],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})


export class EquiposComponent implements OnInit{
  ngOnInit(): void {
    this.listarEquipos()
  }

  listEquipos: Equipo [] = [];
  currentLeague: string = 'SERIEA';
  equipoService = inject(EquiposService)

  route: ActivatedRoute = inject(ActivatedRoute);

  
  constructor(){
    this.currentLeague = String(this.route.snapshot.params['league']);
  };

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

  
  get filteredTeams() {
    return this.listEquipos.filter(team => team.league === this.currentLeague);
  }



  trackById(index: number, item: any): number {
    return item.id;
  }

}
