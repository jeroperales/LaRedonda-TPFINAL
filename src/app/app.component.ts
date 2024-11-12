import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ForumComponent } from './components/forum/forum.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EquiposComponent } from './components/equipos/equipos.component';
import { AboutUsComponent } from './components/about-us/about-us.component'; 
import {  TablasComponent } from './components/tablas/tablas.component';
import { ListComponent } from './components/adminforms/list/list.component';
import { AddComponent } from './components/adminforms/add/add.component';
import { DetallesEquipoComponent } from './components/detalles-equipo/detalles-equipo.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ForumComponent,
    FooterComponent,
    ReactiveFormsModule,
    EquiposComponent,
    AboutUsComponent,
    TablasComponent,
    ListComponent,
    AddComponent,
    DetallesEquipoComponent


],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

  title = 'TP-Final-LaRedonda';

}

