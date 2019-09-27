/* se necesita resolver el siguiente problema usando progaramacion orientada a objetos
se desea realizar un sistema de ventas  de curso online como por ejemplo udemy. platzi etc. 
para ello se necesita  interactuar con estudiantes. profesores de los mismos se necesita 
registrar su informacion basica como nombre, apellido,correo;
por otra parte se necesita interactuar con los cursos que se impartiran de los mismos se 
necesita registrar su presio nombre, descripcion, finalmente se desea guardar el registro
de los estudiantes que compraron algun curso.
un estudiante o profesor puede tener uno o mas direcciones al mismo tiempo una direccion 
esta compuesto por la siguiente  informacion : ciudad , barrio, calle.
 para los profesores en particular  se necesita guardar      
*/

export class Curso {
    private nombre: string;
    private descripcion: string;
    private precio: number;

    constructor(nom: string, descrip: string, ) {
        this.nombre = nom;
        this.descripcion = descrip;


    }
}

export class Profesor {
    private nombre: string;
    private apellido: string;
    private correo: string;
    constructor(nom: string, ape: string, co: string) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
    }
}

   export class Estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    constructor(nom: string, apell: string, cor: string) {
        this.nombre = nom;
        this.apellido = apell;
        this.correo = cor;
    }
}
export class Direccion {
    private ciudad: string;
    private barrio: string;
    private calle: string;

    constructor(ciu: string, barr: string, call: string) {
        this.ciudad = ciu;
        this.barrio = barr;
        this.calle = call
    }
}
export class Compracurso {
    private curso: Curso;
    private estudiante: "Estudiante";
    private fecha: string;
    constructor(cur: Curso, est: "Estudiante", fe: string) {
        this.curso = cur;
        this.estudiante = "Estudiante";
        this.fecha = fe;
    }

}
