
var calcular = document.getElementById('calcular');

function imc () {
var nome = document.getElementById('name').value;
var peso = document.getElementById('peso').value;
var altura = document.getElementById('altura').value;
var resultado = document.getElementById('res');

    if (nome !== '' && altura !== ''  && peso !== '') {

    const valorImc = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorImc < 18.5) {
        classificacao = 'abaixo do peso.';
    } else if (valorImc < 25) {
        classificacao = ' com o peso normal.';
    } else if (valorImc < 30) {
        classificacao = 'levamente acima do peso';
    } else if (valorImc < 40) {
        classificacao = 'acima do peso.';
    }

    resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}.`

} else { 
    alert('Preencha os campos');
}
}

calcular.addEventListener('click', imc);