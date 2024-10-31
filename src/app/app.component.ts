import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { InterfazComponent } from './components/interfaz/interfaz.component';
import { GridComponent } from './components/grid/grid.component';
import { ForumComponent } from './components/forum/forum.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    InterfazComponent,
    GridComponent,
    ForumComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  title = 'TP-Final-LaRedonda';

}

