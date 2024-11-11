export interface Equipo {

    id: number;
    name: string;
    fundYear: number;
    nick?: string;
    location: string;
    stadium: string;
    imageUrl?: string;
    league: string; //dar opciones Premier, LPF, Laliga, serieA

}