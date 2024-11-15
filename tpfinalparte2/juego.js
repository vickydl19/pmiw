class Juego {
  constructor() {
    this.pantalla = "inicio";
    this.botonIniciar = new Boton(190, 370, 100, 50, "Comenzar");
    this.botonCreditos = new Boton(350, 370, 100, 50, "Créditos");
    this.botonVolver = new Boton(490, 370, 100, 50, "Inicio");
    this.fondoInicio = new Fondo("data/imagen5.jpeg");
    this.fondoJuego = new Fondo("data/imagen.jpg");
    this.estadoJuego = "jugando";
    this.puntosBuenos = 0;
    this.puntosMalos = 0;

    this.suministrosBuenos = [];
    this.suministrosMalos = [];

    for (let i = 0; i < 10; i++) {
      this.suministrosBuenos[i] = new Suministro("bueno");
      this.suministrosMalos[i] = new Suministro("malo");
    }

    this.jugador = new Jugador();
  }

  mostrar() {
    if (this.pantalla === "inicio") {
      this.fondoInicio.mostrar();
      this.mostrarPantallaInicio();
    } else if (this.pantalla === "jugando") {
      this.fondoJuego.mostrar();
      this.mostrarJuego();
    } else if (this.pantalla === "creditos") {
      this.fondoInicio.mostrar();
      this.mostrarPantallaCreditos();
    }
  }

  mostrarJuego() {
    if (this.estadoJuego === "jugando") {
      this.jugador.mover();
      this.jugador.mostrar();

      this.gestionarSuministros();
      this.mostrarPuntos();

      this.verificarEstado();
    } else {
      this.mostrarFinal();
    }
  }

  gestionarSuministros() {
    // Mostrar y mover los suministros buenos
    for (let i = 0; i < this.suministrosBuenos.length; i++) {
      let suministro = this.suministrosBuenos[i];
      
      if (suministro.activo) {
        suministro.mover();
        suministro.mostrar();

        if (this.colision(this.jugador, suministro)) {
          this.procesarColision(suministro);
          suministro.reiniciar();  
        }

        if (suministro.fueraDePantalla()) {
          suministro.reiniciar();  // Reinicia el suministro cuando se va fuera de la pantalla
        }
      }
    }

    // Mostrar y mover los suministros malos
    for (let i = 0; i < this.suministrosMalos.length; i++) {
      let suministro = this.suministrosMalos[i];
      
      if (suministro.activo) {
        suministro.mover();
        suministro.mostrar();

        if (this.colision(this.jugador, suministro)) {
          this.procesarColision(suministro);
          suministro.reiniciar();  
        }

        if (suministro.fueraDePantalla()) {
          suministro.reiniciar();  
        }
      }
    }
  }

  colision(jugador, suministro) {
    return dist(jugador.x, jugador.y, suministro.x, suministro.y) < 30;
  }

  procesarColision(suministro) {
    if (suministro.tipo === "bueno") {
      this.puntosBuenos++;
    } else {
      this.puntosMalos++;
    }
  }

  verificarEstado() {
    if (this.puntosMalos >= 3) {
      this.estadoJuego = "perdido";
    } else if (this.puntosBuenos >= 15) {
      this.estadoJuego = "ganado";
    }
  }

  mostrarFinal() {
    textSize(40);
    textAlign(CENTER, CENTER);

    if (sonidoFondo.isPlaying()) {
      sonidoFondo.stop();
    }

    if (this.estadoJuego === "ganado") {
      noStroke();
      fill(0);
      rect(200, 200, 250, 80);
      fill(0, 255, 0);
      text("¡Ganaste!", width / 2, height / 2);
    } else {
      noStroke();
      fill(0);
      rect(200, 200, 250, 80);
      fill(255, 0, 0);
      text("¡Perdiste!", width / 2, height / 2);
    }
    this.botonVolver.mostrar();
    this.botonCreditos.mostrar();
  }

  mostrarPantallaInicio() {
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width / 2, 60);
    textSize(22);
    text("\nTu misión es recoger los suministros buenos que caen de arriba.", width / 2, 130);
    text("\nGanaras si recolectas 15 suministros buenos.\nPerderás si recolectas 3 suministros malos.", width / 2, 190);
    text("\nPara mover al personaje utiliza las teclas A y D.\nHaz clic en el botón Comenzar para jugar.", width / 2, 250);
    text("\nPara reiniciar el juego presiona la tecla R", width / 2, 300);
    this.botonIniciar.mostrar();
    this.botonCreditos.mostrar();
  }

  iniciarJuego() {
    this.pantalla = "jugando";
    this.estadoJuego = "jugando";
    this.puntosBuenos = 0;
    this.puntosMalos = 0;

    this.suministrosBuenos = [];
    this.suministrosMalos = [];
    
    for (let i = 0; i < 10; i++) {
      this.suministrosBuenos[i] = new Suministro("bueno");
      this.suministrosMalos[i] = new Suministro("malo");
    }

    this.jugador = new Jugador();
    if (sonidoFondo) {
      if (sonidoFondo.isPlaying() === false) {
        sonidoFondo.loop();
      }
    }
  }

  mostrarCreditos() {
    this.pantalla = "creditos";
  }

  mostrarPantallaCreditos() {
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 2, height / 4);
    textSize(18);
    text("Victoria Di Lorenzo y Azul Ceballos", width / 2, height / 2);
    text("Comisión 1", width / 2, 200);
    this.botonVolver.mostrar();
  }

  mostrarInicio() {
    this.pantalla = "inicio";
  }

  mostrarPuntos() {
    fill(255);
    textSize(20);
    text("Buenos " + this.puntosBuenos, 90, 30);
    text("Malos " + this.puntosMalos, 90, 60);
  }
}
