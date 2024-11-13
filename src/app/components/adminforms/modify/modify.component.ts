import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EquiposService } from '../../../services/equipos.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../../../interfaces/equipo-interface';

@Component({
  selector: 'app-modify',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './modify.component.html',
  styleUrl: './modify.component.css'
})
export class ModifyComponent implements OnInit{

  id: number = 0;
  fb = inject(FormBuilder)
  equipoService = inject(EquiposService)
  activatedRoute = inject(ActivatedRoute)


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        const idParam = param.get('id');
        if (idParam !== null) {
          this.id = Number(idParam); // Convertimos el id a número
          
        } else {
          console.warn('ID no encontrado en la URL');
        }
      }
    });
  }

  formulario = this.fb.nonNullable.group(
    {
  id: [0],
  name: ["", [Validators.required]],
  fundYear: [0, [Validators.required]],
  nick: [""],
  location: ["", [Validators.required]],
  stadium: ["", Validators.required],
  imageUrl:[""],
  league:  ["", [Validators.required]]
  })

  getEquipoById(id: number){
    this.equipoService.getEquipoByID(id).subscribe({
      next: (equipo: Equipo) =>{
        this.formulario.controls['id'].setValue(equipo.id);
        this.formulario.controls['name'].setValue(equipo.name);
        this.formulario.controls['fundYear'].setValue(equipo.fundYear);
        this.formulario.controls['location'].setValue(equipo.location);
        this.formulario.controls['stadium'].setValue(equipo.stadium);
        this.formulario.controls['league'].setValue(equipo.league);
      },
      error:(e: Error) => {
        console.log(e.message);
      }
    })
  }


  update(){

    const equipo = this.formulario.getRawValue()

    this.equipoService.putEquipo(this.id, equipo)
  }

 
}
