export class Triangulo {
    private altura: number;
    private base: number;
    constructor(alt: number, bas: number) {
        this.altura = alt;
        this.base = bas;
    }
    public setAltura(al: number): void {
        this.altura = al;
    }
    public getAltura() {
        return this.altura;
    }
    public setBase(bas: number): void {
        this.base = bas;
    }
    public getBase() {
        return this.base;
    }
    public getarea(): number {
        let area: number = ((this.altura * this.base)/2)
        return area;
    }
    public getperimetro():number{
        let perimetro:number=this.altura*2 + this.base
        return perimetro;
    } 
    
}

let triangulo1: Triangulo = new Triangulo(5, 7)
console.log(triangulo1);
let area:number= triangulo1.getarea();
console.log("el area del triangulo es" + area);
let perimetro:number= triangulo1.getperimetro();
console.log("el perimetro del triangulo es" + perimetro);