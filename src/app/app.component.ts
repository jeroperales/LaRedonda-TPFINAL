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
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  title = 'TP-Final-LaRedonda';

}

