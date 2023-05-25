const $resultado1 = document.querySelector("#resultado1");
class Persona {
    static esMayorEdad(edad){

        return edad >= 18 ? true : false;
    }
}

document.querySelector("#form").addEventListener("submit", e => {

    e.preventDefault();
    const $edad = document.querySelector("#edad").value;

    $resultado1.innerHTML = Persona.esMayorEdad($edad);
    
})