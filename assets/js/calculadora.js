const form = document.getElementById('formato');
const calculadora = document.getElementById('calculadora');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value * 0.01;

    const imc = (peso / (altura * altura)).toFixed(2);

    const valor = document.getElementById('valor');
    let descricao = '';

    valor.classList.add('attention');

    document.getElementById('informacoes').classList.remove('hidden');

    if (imc < 18.5) {
        descricao = 'Atenção! Você está ABAIXO do peso!';
    } else if (imc >= 18.5 && imc <= 25) {
        descricao = 'Você está no peso IDEAL!';
        valor.classList.remove('attention');
        valor.classList.add('normal');
    } else if (imc > 25 && imc <= 30) {
        descricao = 'Atenção! Você está com SOBREPESO!';
    } else if (imc > 30 && imc <= 35) {
        descricao = 'Atenção! Você está com OBESIDADE MODERADA!';
    } else if (imc > 35 && imc <= 40) {
        descricao = 'Atenção! Você está com OBESIDADE SEVERA!';
    } else {
        descricao = 'Atenção! Você está com OBESIDADE MÓRBIDA!';
    }

    valor.textContent = imc.replace('.', ',');
    document.getElementById('descricao').textContent = descricao;

    calculadora.style.marginTop = '20rem';
    calculadora.style.marginBottom = '2rem';
});

document.querySelector('.exit-icon').addEventListener('click', function() {
    window.location.href = '/index.html';
});

