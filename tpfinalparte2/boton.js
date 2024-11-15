class Boton {
  constructor(x, y, ancho, alto, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
  }

  mostrar() {
    fill(255);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);

    // Detectar si el mouse está presionado y sobre el botón
    if (mouseIsPressed && this.estaSobreBoton()) {
      this.ejecutarAccion();
    }
  }

  estaSobreBoton() {
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }

  ejecutarAccion() {
    if (this.texto === "Comenzar") {
      juego.iniciarJuego();
    } else if (this.texto === "Créditos") {
      juego.mostrarCreditos();
    } else if (this.texto === "Inicio") {
      juego.mostrarInicio();
    }
  }
}
