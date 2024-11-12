import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActiveUser, User } from '../interfaces/user';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})     
export class AuthService {

  private activeUserSubject = new BehaviorSubject<ActiveUser | undefined>(this.getUserFromToken());
  private isAdminSubject = new BehaviorSubject<boolean>(this.isUserAdminFromToken()); // Inicializamos con el estado actual en el token
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  // Exponer el observable de admin para que los guards y otros componentes puedan acceder
  isAdmin(): Observable<boolean> {
    return this.isAdminSubject.asObservable();
  }

  auth(): Observable<ActiveUser | undefined> {
    return this.activeUserSubject.asObservable();
  }

  // Función para realizar el login y almacenar el token en localStorage
  login(username: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.baseUrl}?username=${username}`).pipe(
      map((users) => {
        const user = users.at(0);
        console.log("Usuario obtenido:", user); // Imprime el usuario completo
        if (user && user.username === username && user.password === password) {
          // Guardar token en localStorage (en este caso, simulamos un token)
          const token = JSON.stringify({ username: user.username, id: user.id!, isAdmin: user.isAdmin });
          localStorage.setItem('token', token);

          // Actualizar los BehaviorSubjects
          this.activeUserSubject.next({ username: user.username, id: user.id! });
          this.isAdminSubject.next(user.isAdmin);

          console.log("isAdmin actualizado a:", user.isAdmin); // Añade este log
          return true;
        }
        return false;
      })
    );
  }

  // Función para cerrar sesión y borrar el token
  logout(): Observable<boolean> {
    localStorage.removeItem('token'); // Borrar el token del almacenamiento
    this.activeUserSubject.next(undefined);
    this.isAdminSubject.next(false); // Restablece el estado de administrador en logout
    return of(true);
  }

  // Función de registro (signup) que también guarda el token si el registro es exitoso
  signup(user: User): Observable<boolean> {
    return this.http.post<User>(this.baseUrl, user).pipe(
      map(({ id, username }) => {
        if (id) {
          const token = JSON.stringify({ id, username });
          localStorage.setItem('token', token); // Guardar token en localStorage
          this.activeUserSubject.next({ id, username });
          return true;
        }
        return false;
      })
    );
  }

  // Obtener el token almacenado
  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Obtener usuario activo desde el token guardado en localStorage
  private getUserFromToken(): ActiveUser | undefined {
    const token = this.getToken();
    if (token) {
      const user = JSON.parse(token) as ActiveUser;
      return { id: user.id, username: user.username };
    }
    return undefined;
  }

  // Obtener el estado de admin desde el token guardado
  private isUserAdminFromToken(): boolean {
    const token = this.getToken();
    if (token) {
      const user = JSON.parse(token);
      return user.isAdmin || false;
    }
    return false;
  }
}