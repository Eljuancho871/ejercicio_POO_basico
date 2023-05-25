const $resultado1 = document.querySelector("#resultado1");
const $resultado2 = document.querySelector("#resultado2");
class Empleado {

    static id = 0;

    constructor(nombre, edad, sueldo){

        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
    }

    calcularSalarioAnual() {

        return this.sueldo * 12;
    }

    static generarIdEmpleado(){

        return this.id += 1
    }
}

class Gerente extends Empleado {

    constructor(departamento, nombre, edad, sueldo){

        super(nombre, edad, sueldo);
        this.departamento = departamento;
    }

    calcularSalarioAnual(){

        return (this.sueldo + this.sueldo * 0.10) * 12;
    }
}



document.querySelector("form").addEventListener("submit", e => {
    
    e.preventDefault();
    const $nombre_empleado = document.querySelector("#nombreEmpleado").value;
    const $edad_empleado = document.querySelector("#edadEmpleado").value;
    const $sueldo_empleado = Number(document.querySelector("#sueldoEmpleado").value);
    const $nombre_gerente = document.querySelector("#nombreGerente").value;
    const $edad_gerente = document.querySelector("#edadGerente").value;
    const $sueldo_gerente = Number(document.querySelector("#sueldoGerente").value);
    const $departamento_gerente = document.querySelector("#departamento").value;

    const empleado1 = new Empleado($nombre_empleado, $edad_empleado, $sueldo_empleado);
    const ID = Empleado.generarIdEmpleado();
    $resultado1.innerHTML = empleado1.calcularSalarioAnual() + " su ID es: " + ID;
    
    const gerente1 = new Gerente($departamento_gerente, $nombre_gerente, $edad_gerente, $sueldo_gerente);
    $resultado2.innerHTML = gerente1.calcularSalarioAnual();
})