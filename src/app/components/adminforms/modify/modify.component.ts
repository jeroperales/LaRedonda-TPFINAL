import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EquiposService } from '../../../services/equipos.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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

  fb = inject(FormBuilder)
  equipoService = inject(EquiposService)

  activatedRoute = inject(ActivatedRoute)

  formulario = this.fb.nonNullable.group(
    {
  id: [""],
  name: ["", [Validators.required]],
  fundYear: [0, [Validators.required]],
  nick: [""],
  location: ["", [Validators.required]],
  stadium: ["", Validators.required],
  imageUrl:[""],
  league:  ["", [Validators.required]]
  })
}
