import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAdmin().pipe(
      tap(isAdmin => {
        console.log("Valor de isAdmin en el guard:", isAdmin); // Añade este log
        if (!isAdmin) {
          this.router.navigate(['/not-authorized']);
        }
        return isAdmin;
      })
    );
  }
}
