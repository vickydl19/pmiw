class Fondo {
  constructor(imagen) {
    this.imagen = loadImage(imagen); 
  }

  mostrar() {
    imageMode(CORNER); 
    image(this.imagen, 0, 0, width, height); 
  }
}
