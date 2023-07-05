document.querySelector('.exit-icon').addEventListener('click', function() {
    window.location.href = '/index.html';
});

// Obtém o formulário de contato pelo ID
const formContato = document.querySelector('.contact-form');

// Adiciona um ouvinte de evento de envio ao formulário
formContato.addEventListener('submit', function(event) {
  // Impede o comportamento padrão de envio do formulário
    event.preventDefault();

  // Exibe a mensagem de confirmação como um popup
    Swal.fire({
        icon: 'success',
        title: 'Mensagem enviada com sucesso!',
        showConfirmButton: false,
        timer: 2000
    });

  // Limpa os campos do formulário
    formContato.reset();
});
