const musica = document.getElementById('musica');
musica.volume = 0.8; // volumen fuerte

// Elimina la reproducción automática aquí
// musica.play().catch(e => console.log('Error al reproducir:', e));

// Elementos
const carta = document.getElementById('carta');
const escenaNoche = document.getElementById('escenaNoche');
const escenaDia = document.getElementById('escenaDia');
const escenaGalaxia = document.getElementById('escenaGalaxia');
const escenaUniverso = document.getElementById('escenaUniverso');

// Botones
const btnNoche = document.getElementById('btnNoche');
const btnSol = document.getElementById('btnSol');
const btnGalaxia = document.getElementById('btnGalaxia');
const btnUniverso = document.getElementById('btnUniverso');

// Función para mostrar y habilitar botón inmediatamente
function mostrarBotonContinuar(boton) {
  boton.style.display = 'inline-block';
  boton.disabled = false;
}

// Animar tulipanes creciendo
function crecerTulipanes() {
  const tulipanes = document.querySelectorAll('#campoTulipanes .tulipan');
  tulipanes.forEach((tulipan, i) => {
    setTimeout(() => {
      tulipan.style.transform = 'scale(3)';
    }, i * 200);
  });
}

// Iniciar música con retraso para evitar bloqueo de autoplay
function iniciarMusica() {
  musica.currentTime = 6; // desde 6 segundos
  musica.volume = 0.25;
  musica.play().catch(e => {
    // En caso que autoplay sea bloqueado, esperar interacción
    console.log('Reproducción automática bloqueada, espera interacción');
  });
}

// Funciones para manejar etapas
function mostrarNoche() {
  carta.style.display = 'none';
  escenaNoche.style.display = 'block';
  crecerTulipanes();
  mostrarBotonContinuar(btnNoche);
  iniciarMusica();
}

function mostrarDia() {
  escenaNoche.style.display = 'none';
  escenaDia.style.display = 'block';
  mostrarBotonContinuar(btnSol);
}

function mostrarGalaxia() {
  escenaDia.style.display = 'none';
  escenaGalaxia.style.display = 'block';
  mostrarBotonContinuar(btnGalaxia);
}

function mostrarUniverso() {
  escenaGalaxia.style.display = 'none';
  escenaUniverso.style.display = 'block';
  mostrarBotonContinuar(btnUniverso);
}

// Evento clic en carta - abre y muestra escena noche
carta.addEventListener('click', () => {
  musica.play().catch(e => console.log('Error al reproducir:', e));
  carta.classList.add('abierta');
  setTimeout(() => {
    mostrarNoche();
  }, 1100); // coincide con transición pliegue 1s + 100ms buffer
});

// Botones continuar
btnNoche.addEventListener('click', () => {
  mostrarDia();
});
btnSol.addEventListener('click', () => {
  mostrarGalaxia();
});
btnGalaxia.addEventListener('click', () => {
  mostrarUniverso();
});
btnUniverso.addEventListener('click', () => {
  alert('Gracias por ver la carta, Jackeline Apolinario Pariona ❤️');
});

// Mostrar inmediatamente los botones en cada etapa cuando se cargue página para evitar retrasos
window.onload = () => {
  mostrarBotonContinuar(btnNoche);
  mostrarBotonContinuar(btnSol);
  mostrarBotonContinuar(btnGalaxia);
  mostrarBotonContinuar(btnUniverso);
  // Ocultar todas las escenas menos carta al inicio
  escenaNoche.style.display = 'none';
  escenaDia.style.display = 'none';
  escenaGalaxia.style.display = 'none';
  escenaUniverso.style.display = 'none';
};