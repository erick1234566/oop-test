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

    constructor(nom: string, descrip: string, pre: number) {
        this.nombre = nom;
        this.descripcion = descrip;
        this.precio = pre;


    }
}

export class Profesor {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];
    constructor(nom: string, ape: string, co: string, dir: Direccion[]) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.direccion=dir;
    }

}

export class Alumno {
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
    private calle: string;
    constructor(ciu: string, call: string) {
        this.ciudad = ciu;
        this.calle = call
    }
}
export class Compracurso {
    private curso: Curso;
    private Alumno: Alumno;
    private fecha: string;
    constructor(cur: Curso, alu: Alumno, fe: string) {
        this.curso = cur;
        this.Alumno = alu;
        this.fecha = fe;
    }

}
let curso1: Curso = new Curso("git", "programacion", 30);
//console.log(curso1);
let curso2: Curso = new Curso("java", "programacion", 100);
//console.log(curso2);
let curso3: Curso = new Curso("cocina", "nacional", 200);
//console.log(curso3);
let curso4: Curso = new Curso("pintura", "pintura al oleo", 70);
//console.log(curso4);
let curso5: Curso = new Curso("mecanica", "curso mecanica de autos", 100);
//console.log(curso5);
let alumno1: Alumno = new Alumno("rene","rag","@log");
//console.log(alumno1);
let alumno2: Alumno = new Alumno("jose" ,"lopez","@nose");
//console.log(alumno2);
let alumno3: Alumno= new Alumno("nico","zerruto","@nomames");
//console.log(alumno3);
let alumno4: Alumno = new Alumno("gio","rosado","@hatem");
//console.log(alumno4);
let direccion1: Direccion=new Direccion("cochabamba","calle bolivar")
let direccion2: Direccion=new Direccion("la paz","calle ambar")
let direccion3: Direccion=new Direccion("cochabamba","calle serruto")
let direccion4: Direccion=new Direccion("santa cruz","calle toledo")
let compracurso1: Compracurso=new Compracurso(curso1,alumno1, "12/02/19")
let compracurso2: Compracurso=new Compracurso(curso2,alumno2, "16/03/19")
let compracurso3: Compracurso=new Compracurso(curso1,alumno3, "17/04/19")
let compracurso4: Compracurso=new Compracurso(curso3,alumno4, "13/05/19")
let compracurso5: Compracurso=new Compracurso(curso2,alumno1, "19/06/19")
let compracurso6: Compracurso=new Compracurso(curso1,alumno3, "14/02/19")
let compracurso7: Compracurso=new Compracurso(curso3,alumno4, "11/07/19")
let compracurso8: Compracurso=new Compracurso(curso2,alumno1, "12/03/19")
let compracurso9: Compracurso=new Compracurso(curso1,alumno3, "10/05/19")
let compracurso12: Compracurso=new Compracurso(curso1,alumno2, "12/06/19")
console.log(curso1);
console.log(curso2);
console.log(curso3);
console.log(curso4);
console.log(curso5);
console.log(alumno1);
console.log(alumno2);
console.log(alumno3);
console.log(alumno4);
console.log(compracurso1);
console.log(compracurso2);
console.log(compracurso3);
console.log(compracurso4);
console.log(compracurso5);
console.log(compracurso6);
console.log(compracurso7);
console.log(compracurso8);
console.log(compracurso9);
console.log(compracurso12);


let profesor1: Profesor= new Profesor ("jose","reagan", "", [direccion1, direccion2])
console.log(profesor1)
let profesor2: Profesor= new Profesor( "ramiro","terrazas","@",[direccion4,direccion3])
console.log(profesor2)







