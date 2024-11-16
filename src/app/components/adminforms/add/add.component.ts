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
    PL: ['PL/empty.png', 'PL/arsenal.png', 'PL/astonvilla.png', 'PL/bournemouth.png', 'PL/brentford.png' , 'PL/brighton.png' , 'PL/chelsea.png', 'PL/crystalpalace.png', 'PL/everton.png' , 'PL/fulham.png', 'PL/ipswitchtown.png', 'PL/leicester.png', 'PL/liverpool.png', 'PL/manchestercity.png', 'PL/manchesterunited.png' , 'PL/newcastle.png' , 'PL/nottingham_forest.png' , 'PL/southampton.png' , 'PL/tottenham.png' , 'PL/westham.png' , 'PL/wolves.png'],
    SERIEA: ['SERIEA/atalanta.png', 'SERIEA/bologna.png','SERIEA/cagliari.png','SERIEA/como.png','SERIEA/Copia de napoli.png','SERIEA/empoli.png', 'SERIEA/empty.png', 'SERIEA/fiorentina.png', 'SERIEA/genoa.png','SERIEA/hellasverona.png', 'SERIEA/inter.png','SERIEA/juventus.png','SERIEA/lazio.png','SERIEA/lecce.png','SERIEA/milan.png','SERIEA/monza.png','SERIEA/parma.png','SERIEA/roma.png','SERIEA/torino.png','SERIEA/udinese.png','SERIEA/venezia.png' ],
   LALIGA: ['LALIGA/empty.png','LALIGA/alaves.png','LALIGA/athletic.png','LALIGA/atlmadrid.png','LALIGA/barcelona.png','LALIGA/betis.png','LALIGA/celta.png','LALIGA/espanyol.png','LALIGA/getafe.png','LALIGA/girona.png','LALIGA/leganes.png','LALIGA/mallorca.png','LALIGA/osasuna.png','LALIGA/rayovallecano.png','LALIGA/realmadrid.png','LALIGA/realsociedad.png','LALIGA/sevilla.png','LALIGA/udlaspalmas.png','LALIGA/valencia.png','LALIGA/valladolid.png','LALIGA/villarreal.png'],
   WORLD: ['WORLD/alemania.png', 'WORLD/arabiasaudita.png', 'WORLD/argentina.png', 'WORLD/austria.png', 'WORLD/belgica.png', 'WORLD/bolivia.png', 'WORLD/bosnia.png', 'WORLD/brasil.png', 'WORLD/camerun.png', 'WORLD/canada.png', 'WORLD/chile.png', 'WORLD/china.png', 'WORLD/colombia.png', 'WORLD/coreadelsur.png', 'WORLD/costarica.png', 'WORLD/croacia.png', 'WORLD/dinamarca.png', 'WORLD/ecuador.png', 'WORLD/egipto.png', 'WORLD/elsvador.png', 'WORLD/escocia.png', 'WORLD/eslovaquia.png', 'WORLD/espana.png', 'WORLD/finlandia.png', 'WORLD/francia.png', 'WORLD/gales.png', 'WORLD/ghana.png', 'WORLD/grecia.png', 'WORLD/guatemala.png']

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
