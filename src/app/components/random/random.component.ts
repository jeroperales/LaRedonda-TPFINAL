import { Component, inject, OnInit } from '@angular/core';
import { Equipo } from '../../interfaces/equipo-interface';
import { EquiposService } from '../../services/equipos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent implements OnInit{

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
team1: Equipo | null = null;
team2: Equipo | null = null;

randomizer() {
  if (this.listEquipos.length < 2) {
    console.log('Not enough teams to pick from.');
    return;
  }

  // Randomly pick two different teams
  const firstIndex = Math.floor(Math.random() * this.listEquipos.length);
  let secondIndex;
  do {
    secondIndex = Math.floor(Math.random() * this.listEquipos.length);
  } while (secondIndex === firstIndex);

  this.team1 = this.listEquipos[firstIndex];
  this.team2 = this.listEquipos[secondIndex];
}
}
