import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  activeUser = false;
  private sub?: Subscription;
  isAdmin = false;

  ngOnInitAdmin(): void {
    this.authService.isAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.authService.auth().subscribe({
      next: (activeUser) => {
        if(activeUser) {
          this.activeUser = true;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onLogOut() {
    this.authService.logout().subscribe({
      next: (loggedOut) => {
        if (loggedOut) {
          this.activeUser = false;
          this.router.navigate(['/']);
        }
      }
    })
  }
}
