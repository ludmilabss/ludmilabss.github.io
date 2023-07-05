document.addEventListener('DOMContentLoaded', function() {
    const formCadastro = document.getElementById('form-cadastro');

    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = formCadastro.nome.value;
        const email = formCadastro.email.value;
        const senha = formCadastro.senha.value;
    
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
    
        window.location.href = '/pages/login.html';
    });
});
