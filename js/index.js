const $resultado1 = document.querySelector("#resultado1");
const $resultado2 = document.querySelector("#resultado2");

class Persona {

    constructor(nombre, edad, sexo){

        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar(){

        $resultado1.innerHTML = `holaaaa me llamo ${this.nombre}`;
    }
}

class Estudiante extends Persona{

    constructor(carrera, nombre, edad, sexo){
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar(){
        $resultado2.innerHTML = `y estudio ${this.carrera}`;
    }

}

document.querySelector("#form").addEventListener("submit", e => {

    e.preventDefault();
    const $nombre = document.querySelector("#nombre").value;
    const $edad = document.querySelector("#edad").value;
    const $sexo = document.querySelector("#sexo").value;
    const $carrera = document.querySelector("#carrera").value;

    const estudiante1 = new Estudiante($carrera, $nombre, $edad, $sexo);
    estudiante1.saludar();
    estudiante1.estudiar();
    
})