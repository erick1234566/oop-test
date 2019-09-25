export class Bar {
    private nombre: string;
    private capacidad: number;
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setCapacidad(cap: number): void {
        this.capacidad = cap;
    }
    public getCapacidad(): number {
        return this.capacidad;
    }
}
export class Barman {
    private nombre: string;
    private apellido: string;
    constructor(nom: string, apell: string) {
        this.nombre = nom;
        this.apellido = apell;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setApellido(apell: string): void{
     this.apellido=apell;
    }
    public getApellido(): string{
        return this.apellido;
    }
}

export class Trago {
    private nombre: string;
    private color: string;
    private cantidad: number;
    constructor(nom: string, col: string, cant: number) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public getNombre(): string {
        return this.nombre
    }

    public setColor(col: string): void{
        this.color= col;
    }
    public getColor(): string{
        return this.color
    }
}
let bar1: Bar = new Bar("helechos", 40);
let bar2: Bar = new Bar("angeles", 20);
let barman1: Barman = new Barman("rene", "gallo");
let barman2: Barman = new Barman("nik", "sola");
let trago: Trago = new Trago("mojito", "rojo", 10);
console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(barman2);
console.log(trago);


bar1.setNombre("pueblito");
console.log(bar1.getNombre());
barman1.setNombre("jose")
console.log(barman1.getNombre())
trago.setNombre("tragolujuria")
console.log(trago.getNombre());
bar1.setCapacidad(40);
console.log(bar1.getCapacidad());
barman1.setApellido("lopes");
console.log(barman1.getApellido());
trago.setColor("blue");
console.log(trago.getColor());


