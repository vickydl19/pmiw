class Jugador {
  constructor() {
    this.x = width / 2;
    this.y = 400;
    this.velocidad = 8;
    this.imagenJugador = loadImage("data/imagen1.png"); 
  }

  mover() {
    if (keyIsDown(65)) { // Tecla a
      this.x -= this.velocidad;
    }
    if (keyIsDown(68)) { // Tecla d
      this.x += this.velocidad;
    }

    // Limita el movimiento hasta el borde
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > width) {
      this.x = width;
    }
  }

  mostrar() {
    imageMode(CENTER);
    image(this.imagenJugador, this.x, this.y, 100, 100);
  }
}
