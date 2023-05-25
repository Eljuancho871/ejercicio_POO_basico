const $resultado1 = document.querySelector("#resultado1");
const $resultado2 = document.querySelector("#resultado2");
const $resultado3 = document.querySelector("#resultado3");
class Figura {

    constructor(color, area){

        this.color = color;
        this.area = area;
    }

    calcularArea(){

        $resultado1.innerHTML = `El area es de ${this.area}`;
    }
}

class Circulo extends Figura {
    
    constructor(radio){
        
        super(null, null);
        this.radio = radio;
  } 
  
  calcularArea(){
      
      this.area = Math.PI * (this.radio * this.radio);
      $resultado2.innerHTML = `El area del circulo es ${this.area}`;
    }
}

class Rectangulo extends Figura {

    constructor(largo, ancho){

        super(null, null);
        this.largo = largo;
        this.ancho = ancho;
    }

    calcularArea(){

      this.area = this.largo * this.ancho;
      $resultado3.innerHTML = `El area del circulo es ${this.area}`;
    }
}


document.querySelector("#form").addEventListener("submit", e => {

    e.preventDefault();
    $color = document.querySelector("#color").value;
    $area = document.querySelector("#area").value;
    $radio = document.querySelector("#radio").value;
    $largo = document.querySelector("#largo").value;
    $ancho = document.querySelector("#ancho").value;

    const figura1 = new Figura($color, $area);
    figura1.calcularArea();
    
    const circculo1 = new Circulo($radio);
    circculo1.calcularArea();
    
    const rectangulo1 = new Rectangulo($ancho, $largo);
    rectangulo1.calcularArea();
})

