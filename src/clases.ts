export class jugador{
    nombre:string;
    equipo:string;
    goles:number;

    constructor(nombre:string,equipo:string,goles:number){
        this.nombre=nombre;
        this.equipo=equipo;
        this.goles=goles;
    }

    public heroe(){
        console.log(this.nombre+" es el heroe del partido.");
    }

    public borracho(){
        console.log(this.nombre+" no juega es un pobre borracho.");
    }

}

