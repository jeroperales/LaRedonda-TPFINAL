import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterfazComponent } from './components/interfaz/interfaz.component';
import { GridComponent } from './components/grid/grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    InterfazComponent,
    GridComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP-Final-LaRedonda';
}
