document.querySelector('.exit-icon').addEventListener('click', function() {
  window.location.href = '/index.html';
});

const formContato = document.querySelector('.contact-form');

formContato.addEventListener('submit', function(event) {
  event.preventDefault();

  alert("Mensagem enviada com sucesso!");

  formContato.reset();
});
