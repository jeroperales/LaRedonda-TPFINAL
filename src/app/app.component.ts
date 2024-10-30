import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { InterfazComponent } from './components/interfaz/interfaz.component';
import { GridComponent } from './components/grid/grid.component';
import { ForumComponent } from './components/forum/forum.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    InterfazComponent,
    GridComponent,
    ForumComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  title = 'TP-Final-LaRedonda';

}

