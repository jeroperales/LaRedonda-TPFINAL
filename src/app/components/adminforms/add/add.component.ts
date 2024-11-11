import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Equipo } from '../../../interfaces/equipo-interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EquiposComponent } from '../../equipos/equipos.component';
import { EquiposService } from '../../../services/equipos.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})


export class AddComponent {
  @Output()
  emitirEquipo: EventEmitter<Equipo> = new EventEmitter;

  fb = inject(FormBuilder)
  equipoService = inject(EquiposService)

  idGlobal: number = 0;

  formulario = this.fb.nonNullable.group(
    {
      id: [this.idGlobal as number],
      name: ["", [Validators.required]],
      fundYear: [0, [Validators.required]],
      nick: [""],
      location: ["", [Validators.required]],
      stadium: ["", Validators.required],
      imageUrl:[""],
      league:  ["", [Validators.required]]   //dar opciones Premier, LPF, Laliga, serieA

  }
)


addEquipo() {
  if (this.formulario.invalid) return;

  // Llama a getNextId y luego asigna el ID actualizado al formulario
  this.equipoService.getNextId().subscribe({
    next: (numero: number) => {
      this.idGlobal = numero;
      
      // Actualiza el campo id en el formulario con el nuevo idGlobal
      this.formulario.patchValue({ id: this.idGlobal });

      // Ahora obtén el equipo con el ID actualizado
      const equipo = this.formulario.getRawValue();

      console.log(equipo);

      // Llama a la función para escribir en la base de datos
      this.addEquipoDB(equipo);

      // Emite el equipo
      this.emitirEquipo.emit(equipo); 
    },
    error: (e: Error) => {
      console.log(e.message);
    }
  });
}


addEquipoDB(equipo: Equipo) {
  this.equipoService.postEquipo(equipo).subscribe(
    {
      next: (equipo: Equipo) => {
        console.log('SE HA AGREGADO: ', equipo.name)
      },
      error: (e: Error) =>{
        console.log(e.message)
      }
    }
  )
}

}
