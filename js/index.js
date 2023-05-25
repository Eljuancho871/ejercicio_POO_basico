const $resultado1 = document.querySelector("#resultado1");
const $resultado2 = document.querySelector("#resultado2");
const $resultado3 = document.querySelector("#resultado3");
class Vehiculo {

    constructor(marca, modelo, velocidad){

        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    acelerar(){

        return this.velocidad += 10
    }

    static convertirKmHEnMph(velocidadK){

        return velocidadK / 1.60934
    }

}

class Coche extends Vehiculo {

    constructor(combustible, marca, modelo, velocidad){

        super(marca, modelo, velocidad);
        this.combustible = combustible;
    }

    acelerar(){

        return this.velocidad += 20;
    }
}


document.querySelector("form"),addEventListener("submit", e => {
    
    e.preventDefault();
    const $marca = document.querySelector("#marca").value;
    const $modelo = document.querySelector("#modelo").value;
    const $combustible = document.querySelector("#combustible").value;
    const $velocidad = Number(document.querySelector("#velocidad").value);
    const $velocidadC = Number(document.querySelector("#velocidadC").value);
    
    const vehiculo1 = new Vehiculo($marca, $modelo, $velocidad);
    $resultado1.innerHTML = vehiculo1.acelerar();
    const coche1 = new Coche($combustible, $marca, $modelo, $velocidad);
    $resultado2.innerHTML = coche1.acelerar();
    $resultado3.innerHTML = Vehiculo.convertirKmHEnMph($velocidadC);
})