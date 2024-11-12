import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Equipo } from '../../../interfaces/equipo-interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EquiposComponent } from '../../equipos/equipos.component';
import { EquiposService } from '../../../services/equipos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})


export class AddComponent {
  @Output()
  emitirEquipo: EventEmitter<Equipo> = new EventEmitter;

  fb = inject(FormBuilder)
  equipoService = inject(EquiposService)

  images: { [key: string]: string[] } = {
    LPF: ['LPF/argentinos.png', 'LPF/atleticotucuman.png','LPF/banfield.png','LPF/barracas.png', 'LPF/belgrano.png','LPF/boca.png', 'LPF/centralcordoba.png', 'LPF/defensa.png','LPF/empty.png', 'LPF/estudiantes.png', 'LPF/gimnasia.png', 'LPF/godoycruz.png', 'LPF/huracan.png', 'LPF/independiente.png', 'LPF/independienteriv.png', 'LPF/instituto.png', 'LPF/lanus.png', 'LPF/newells.png', 'LPF/platense.png', 'LPF/racing2.png', 'LPF/riestra.png', 'LPF/river.png', 'LPF/rosariocentral.png', 'LPF/sanlorenzo.png', 'LPF/sarmiento.png', 'LPF/talleres.png', 'LPF/tigre.png', 'LPF/union.png', 'LPF/velez.png'],
    PL: ['PL/empty.png', ''],
    SERIEA:['SERIEA/atalanta.png', 'SERIEA/bologna.png','SERIEA/cagliari.png','SERIEA/como.png','SERIEA/Copia de napoli.png','SERIEA/empoli.png', 'SERIEA/empty.png', 'SERIEA/fiorentina.png', 'SERIEA/genoa.png','SERIEA/hellasverona.png', 'SERIEA/inter.png','SERIEA/juventus.png','SERIEA/lazio.png','SERIEA/lecce.png','SERIEA/milan.png','SERIEA/monza.png','SERIEA/parma.png','SERIEA/roma.png','SERIEA/torino.png','SERIEA/udinese.png','SERIEA/venezia.png' ]
   , LALIGA: ['LALIGA/empty.png', ''],
  };
  imageOptions: string[] = [];



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

constructor() {
  // Actualiza las imagenes cuando cambia la liga
  this.formulario.get('league')?.valueChanges.subscribe((selectedLeague) => {
    this.imageOptions = this.images[selectedLeague] || [];
    this.formulario.get('imageUrl')?.setValue(''); // Reset selected image
  });
}



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
