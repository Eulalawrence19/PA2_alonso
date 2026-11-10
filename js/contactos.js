// El sitio es estático: este formulario solo demuestra la validación del navegador.
const formulario = document.querySelector('#formulario-contacto');
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    formulario.querySelector('.estado-formulario').textContent = 'Demostración completada: el mensaje no se ha enviado.';
});
