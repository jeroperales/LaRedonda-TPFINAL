export interface User {
    id?: string,
    username: string,
    email?: string,
    password: string,
    isAdmin: false,
    equipoFavorito?:number,
}

export interface ActiveUser {
    id: string,
    username: string
}