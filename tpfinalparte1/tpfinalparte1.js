//Victoria Di Lorenzo y Azul Ceballos
//Comisión 1
//Modificamos el diagrama
let textos = [];
let fondos = [];
let estado;
let sonidoDefondo;

function preload() {
  textos = loadStrings("data/cuento.txt");
  sonidoDefondo = loadSound("data/sonido.mp3");
  subirImagenes();
}

function setup() {
  createCanvas(640, 480);
  estado = "autopista"; 
}

function draw() {
  background(200);
 
  if (estado === "autopista") {
    image(fondos[0], 0, 0, width, height); 
    dibujarRectangulo(150, 50, 335, 60);
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text('La autopista del sur', width / 2, 80);
    botonMusica(265, 360, 100, 50, "Música");
    
    // Dibujar botones
    dibujarBoton(100, 300, 150, 50, "Inicio");
    dibujarBoton(380, 300, 150, 50, "Créditos");

  } else if (estado === "pantalla1") {
    image(fondos[0], 0, 0, width, height);
    dibujarRectangulo(60, 10, 495, 70);
    mostrarTexto(textos[0], 10);

  } else if (estado === "pantalla2") {
    image(fondos[1], 0, 0, width, height);
    dibujarRectangulo(60, 10, 500, 50);
    mostrarTexto(textos[1], 10);

  } else if (estado === "pantalla3") {
    image(fondos[2], 0, 0, width, height);
    dibujarRectangulo(60, 10, 495, 50);
    mostrarTexto(textos[2], 10);
    dibujarBoton(100, 300, 200, 50, "Hacer contacto con otros conductores");
    dibujarBoton(350, 300, 200, 50, "Mantenerse apartado");

  } else if (estado === "pantalla4") {
    image(fondos[3], 0, 0, width, height);
    dibujarRectangulo(60, 10, 495, 50);
    mostrarTexto(textos[3], 12);

  } else if (estado === "pantalla5") {
    image(fondos[4], 0, 0, width, height);
    dibujarRectangulo(60, 10, 495, 60);
    mostrarTexto(textos[4], 10);
    dibujarBoton(100, 300, 200, 50, "Seguir aislado");
    dibujarBoton(350, 300, 200, 50, "Cambiar de idea e integrase al grupo"); 

  } else if (estado === "pantalla6") {
    image(fondos[5], 0, 0, width, height);
    dibujarRectangulo(60, 10, 505, 60);
    mostrarTexto(textos[5], 10);
    dibujarBoton(100, 300, 200, 50, "Volver al Inicio");
    dibujarBoton(350, 300, 200, 50, "Volver a la decisión");

  } else if (estado === "pantalla7") {
    image(fondos[6], 0, 0, width, height);
    dibujarRectangulo(60, 10, 500, 80);
    mostrarTexto(textos[6], 10);

  } else if (estado === "pantalla8") {
    image(fondos[7], 0, 0, width, height);
    dibujarRectangulo(60, 10, 505, 70);
    mostrarTexto(textos[7], 10);
    dibujarBoton(100, 350, 200, 50, "Proponer una repartición justa"); 
    dibujarBoton(350, 350, 200, 50, "Guardar comida solo para él");

  } else if (estado === "pantalla9") {
    image(fondos[8], 0, 0, width, height);
    dibujarRectangulo(60, 10, 505, 50);
    mostrarTexto(textos[8], 10); 

  } else if (estado === "pantalla10") {
    image(fondos[12], 0, 0, width, height); 
    dibujarRectangulo(60, 10, 505, 50);
    mostrarTexto(textos[8], 10); 
    dibujarBoton(100, 350, 200, 50, "Inicio");
    dibujarBoton(350, 350, 200, 50, "Volver a la decisión");
    
  } else if (estado === "pantalla11") {
    image(fondos[9], 0, 0, width, height); 
    dibujarRectangulo(60, 10, 505, 70);
    mostrarTexto(textos[10], 10); 

    // Dibujar botones en pantalla 11
    dibujarBoton(100, 350, 200, 50, "Proponer abandonar los autos");
    dibujarBoton(350, 350, 200, 50, "Quedarse en el auto y esperar"); 

  } else if (estado === "pantalla12") { 
    image(fondos[10], 0, 0, width, height); 
    dibujarRectangulo(60, 10, 505, 80);
    mostrarTexto(textos[11], 10);
    dibujarBoton(220, 300, 200, 50, "Volver a la decisión");

  } else if (estado === "pantalla13") { 
    image(fondos[11], 0, 0, width, height); 
    dibujarRectangulo(60, 10, 505, 80);
    mostrarTexto(textos[12], 10);
    fill(255);
    textSize(32);
    text('Fin', width / 2, 200);
    
    // botones volver inicio y créditos
    dibujarBoton(100, 350, 200, 50, "Volver al Inicio"); 
    dibujarBoton(350, 350, 200, 50, "Créditos"); 
    
  } else if (estado === "creditos") {
    image(fondos[0], 0, 0, width, height);
    mostrarCreditos()
    dibujarBoton(220, 390, 200, 50, "Inicio");
  }
}

function mousePressed() {
    if (localizarBoton(265, 360, 100, 50)) {
    if (sonidoDefondo.isPlaying()) {
      sonidoDefondo.stop(); // Si está sonando, detén el sonido
    } else {
      sonidoDefondo.loop(); // Si no está sonando, empieza a reproducir en bucle
    }
  }
    
  if (estado === "autopista") {
    if (localizarBoton(100, 300, 150, 50)) {
      estado = "pantalla1"; 
    }
    if (localizarBoton(390, 300, 150, 50)) {
      estado = "creditos"; 
    }
  } else if (estado === "pantalla1") {
    estado = "pantalla2"; 
  } else if (estado === "pantalla2") {
    estado = "pantalla3"; 
  } else if (estado === "pantalla3") {
    if (localizarBoton(100, 300, 200, 50)) {
      estado = "pantalla4"; 
    } else if (localizarBoton(350, 300, 200, 50)) {
      estado = "pantalla5"; 
    }
  } else if (estado === "pantalla4") {
    estado = "pantalla7"; 
  } else if (estado === "pantalla5") {
    if (localizarBoton(100, 300, 200, 50)) {
      estado = "pantalla6"; 
    } else if (localizarBoton(350, 300, 200, 50)) {
      estado = "pantalla4"; 
    }
  } else if (estado === "pantalla6") {
    if (localizarBoton(100, 300, 200, 50)) {
      estado = "autopista"; 
    } else if (localizarBoton(350, 300, 200, 50)) {
      estado = "pantalla5"; 
    }
  } else if (estado === "pantalla7") {
    estado = "pantalla8"; 
  } else if (estado === "pantalla8") {
    if (localizarBoton(100, 350, 200, 50)) {
      estado = "pantalla9"; 
    } else if (localizarBoton(350, 350, 200, 50)) {
      estado = "pantalla10"; 
    }
  } else if (estado === "pantalla9") {
    estado = "pantalla11"; 
  } else if (estado === "pantalla10") {
    if (localizarBoton(100, 350, 200, 50)) {
      estado = "autopista"; 
    } else if (localizarBoton(350, 350, 200, 50)) {
      estado = "pantalla8"; 
    }
  } else if (estado === "pantalla11") {
    if (localizarBoton(100, 350, 200, 50)) {
      estado = "pantalla12"; // Cambia a la pantalla 12
    } else if (localizarBoton(350, 350, 200, 50)) {
      estado = "pantalla13"; // Cambia a la pantalla 13
    }
  } else if (estado === "pantalla12") {
    if (localizarBoton(220, 300, 200, 50)) {
      estado = "pantalla11"; // Volver a pantalla 11
    }
  } else if (estado === "pantalla13") {
    if (localizarBoton(100, 350, 200, 50)) {
      estado = "autopista"; // Volver al inicio
    } else if (localizarBoton(350, 350, 200, 50)) {
      estado = "creditos"; // Va a créditos
    }
  } else if (estado === "creditos") {
    if (localizarBoton(220, 390, 200, 50)) {
      estado = "autopista"; 
    }
  }
}

// Función para mostrar texto
function mostrarTexto(texto, size) {
  fill(0); 
  textSize(size);
  textAlign(LEFT, TOP);
  text(texto, 70, 15, 500);
}

// Función para cargar imágenes
function subirImagenes() {
  for (let i = 0; i < 13; i++) { 
    fondos[i] = loadImage("data/autopista" + i + ".jpeg");
  }
}
//función para los botones
function dibujarBoton(x, y, an, al, texto) {
  fill(255);
  rect(x, y, an, al);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(11);
  text(texto, x + an / 2, y + al / 2);
}
//función para el boton de la música
function botonMusica(x, y, an, al, texto) {
  fill(255);
  rect(x, y, an, al);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(11);
  text(texto, x + an / 2, y + al / 2);
}
//función para el rectangulo del fondo
function dibujarRectangulo(x, y, ancho, alto) {
  fill(255); 
  rect(x, y, ancho, alto); 
}
//función para el contenido de los créditos
function mostrarCreditos() {
  textSize(32);
  textAlign(CENTER);
  fill(255);
  rect(250, 40, 140, 40); 
  fill(0);
  text('Créditos', width / 2, 60); 

  // Información de los créditos
  textSize(18);
  fill(255);
  rect(230, 110, 180, 235); 
  fill(0);
  text('La autopista del sur', width / 2, 130); 
  text('Autor: Julio Cortázar', width / 2, 170); 
  text('Alumnas:', width / 2, 210); 
  text('Victoria Di Lorenzo', width / 2, 250); 
  text('Azul Ceballos', width / 2, 290); 
  text('Comisión 1', width / 2, 330); 
  
}


function localizarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}  
