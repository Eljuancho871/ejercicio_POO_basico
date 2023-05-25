const $resultado1 = document.querySelector("#resultado1");
const $resultado2 = document.querySelector("#resultado2");
class Animal {

    constructor(nombre, edad){

        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido(){

        $resultado1.innerHTML = `El ${this.nombre} hace un sonido`;
    }
}

class Perro extends Animal {

    constructor(raza){
        super();
        this.raza = raza;
    }

    moverCola(){

        $resultado2.innerHTML = "el perro esta moviendo la cola";
    }
}

document.querySelector("#form").addEventListener("submit", e => {

    e.preventDefault();
    const $nombre = document.querySelector("#nombre").value;
    const $edad = document.querySelector("#edad").value;
    const $raza = document.querySelector("#raza").value;

    const animal1 = new Animal($nombre, $edad);
    animal1.hacerSonido();

    const perro1 = new Perro($raza);
    perro1.moverCola();
    
})