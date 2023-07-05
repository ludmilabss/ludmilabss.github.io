document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('form-login');

    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = formLogin.email.value;
        const senha = formLogin.senha.value;

        const storedEmail = localStorage.getItem('email');
        const storedSenha = localStorage.getItem('senha');

        if (email === storedEmail && senha === storedSenha) {
            alert('Login bem-sucedido! Redirecionando para a página principal.');
            window.location.href = '/pages/home.html';
        } else {
            alert('Login falhou. Verifique seus dados e tente novamente.');
        }
    });
});
