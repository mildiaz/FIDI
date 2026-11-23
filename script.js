// PORTAFOLIO FIDI - script.js - Guardar como script.js
function irA(id) {
  document.querySelectorAll('.pagina').forEach(function (s) { s.classList.remove('active'); });
  document.querySelectorAll('.tab').forEach(function (b) { b.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
  document.querySelector('.tab[data-tab="' + id + '"]').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('.tab').forEach(function (btn) {
  btn.addEventListener('click', function () { irA(btn.dataset.tab); });
});
var botonTema = document.getElementById('tema');
function actualizarLogos() {
  var oscuro = document.body.classList.contains('oscuro');
  document.querySelectorAll('.logo-header, .logo-portada, .logo-footer').forEach(function (img) {
    img.src = oscuro ? 'logo-claro-borde-negro.png' : 'logo-fondo-oscuro.png';
  });
}
botonTema.addEventListener('click', function () {
  var oscuro = document.body.classList.toggle('oscuro');
  botonTema.textContent = oscuro ? '\u263D' : '\u2600';
  actualizarLogos();
});
actualizarLogos();
var buscar = document.getElementById('buscar');
if (buscar) {
  buscar.addEventListener('input', function () {
    var texto = buscar.value.toLowerCase();
    document.querySelectorAll('.semillero').forEach(function (card) {
      card.style.display = card.textContent.toLowerCase().includes(texto) ? '' : 'none';
    });
  });
}
