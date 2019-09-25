    export class Bar {
    nombre: String;
    capacidad: number;
    constructor(nom:string,cap:number){
        this.nombre= nom;
        this.capacidad=cap;
    }
}
 
export class Barman{
    nombre: string;
    apellido: string;
    constructor(nom:string,apell: string){
        this.nombre=nom;
        this.apellido=apell;
    }
}

    export class Trago{
      nombre: string;
      color: string;
    cantidad: number;
    constructor(nom:string, col: string, cant:number){
        this.nombre=nom;
        this.color=col;
        this.cantidad=cant;
    }


}
 let bar1: Bar = new Bar("helechos", 40);
 let bar2: Bar = new Bar("angeles", 20);
 let barman1: Barman= new Barman("rene","gallo");
 let barman2: Barman= new Barman("nik","sola");
 let trago: Trago= new Trago("mojito","rojo",10);
 console.log(bar1);
 console.log(bar2);
 console.log(barman1);
 console.log(barman2);
 console.log(trago);
 
 
 
 