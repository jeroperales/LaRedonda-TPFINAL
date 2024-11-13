import { Component, inject, OnInit } from '@angular/core';
import { EquiposService } from '../../../services/equipos.service';
import { Equipo } from '../../../interfaces/equipo-interface';
import { AddComponent } from '../add/add.component';
import { CommonModule } from '@angular/common';
import { ModifyComponent } from '../modify/modify.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AddComponent,
    CommonModule,
    ModifyComponent,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent implements OnInit{

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

  addEquipo(equipo: Equipo){
    this.listEquipos.push(equipo);
    this.listEquipos.sort((a, b) => a.id - b.id);
  }

  deleteEquipo(id : number ){
    this.equipoService.deleteEquipo(id).subscribe({
      next: () => {
        console.log('SE BORRO CHETO');
      },
      error:(e: Error) => {
        console.log(e.message);
      }
    }
  )

  }

modifyEquipo(id: number, equipo: Equipo){

}

}
