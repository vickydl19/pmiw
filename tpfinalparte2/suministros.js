class Suministro {
  constructor(tipo) {
    this.reiniciar(); 
    this.imagenBueno = loadImage("data/imagen2.png");
    this.imagenMalo = loadImage("data/imagen3.png");

  //asigna el tipo de suministro
    if (tipo) {
      this.tipo = tipo;
    } else if (random() < 0.5) {
      this.tipo = "bueno";
    } else {
      this.tipo = "malo";
    }
  }

  reiniciar() {
    this.x = random(width);
    this.y = -random(50, 500); // Caen desde arriba
    this.velocidad = random(5, 8);
    this.activo = true;
  }

  mover() {
    this.y += this.velocidad;
  }

  mostrar() {
    imageMode(CENTER);
    if (this.tipo === "bueno") {
      image(this.imagenBueno, this.x, this.y, 50, 50);
    } else {
      image(this.imagenMalo, this.x, this.y, 50, 50);
    }
  }

  fueraDePantalla() {
    return this.y > height;
  }
}
