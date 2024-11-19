export interface User {
    id: string;
    username: string; // <- Este campo no debe ser opcional
    email?: string;
    password: string;
    isAdmin: boolean;
    equipoFavorito?: string;
  }
  

export interface ActiveUser {
    id: string,
    username: string
}