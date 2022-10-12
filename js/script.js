const numeral = document.querySelectorAll('dt');
const signals = document.querySelectorAll('dd');
const clear = document.querySelector('#clear');
let exit = document.querySelector('#exit');
let values, operator = [], operation = [];

// PEGA CADA CLICK E ADICIONA UM APÓS O OUTRO
callback = (e) =>{
    values = e.target.innerText;
    exit.value += values;
}

//  EVENTO DE CLICK PARA CADA NUMERO
numeral.forEach((i) => {
    i.addEventListener('click', callback);
});

// PEGA TODOS O OPERADORA E COLOCAR NUM ARRAY
signals.forEach((i) => {
    operator.push(i);
});

// EVENTO DE CLICK AO OPERADOR +
// PEGA O VALOR TECLADO E ADICIONA NO INICIO DE UM ARRAY
// EXITE O VALOR NO VISOR COM O OPERADOR SELECIONADO
operator[5].addEventListener('click', () => {
    operation.unshift(parseFloat(exit.value));
    exit.value = `${operation[0]}+`;
});

// EVENTO DE CLICK AO OPERADOR =
// PEGA O SEGUNDO VALOR TECLADO E ADICIONA NO INICIO DO ARRAY
// SOMA OS DOIS VALORES RECEBIDOR NO ARRAY
// PEGA O VALOR DA SOMA E ADICIONA AO INICIO DO ARRAY
// EXIBE O RESULTADO DA OPERAÇÃO NO VISOR
operator[4].addEventListener('click', () => {
    operation.unshift(parseFloat(exit.value));
    soma = operation[0] + operation[1];
    operation.unshift(soma);
    exit.value = operation[0];
});

// LIMPA A TELA E OS ARRAYS PARA INICIAR UMA NOVA OPERAÇÃO
clear.addEventListener('click', () => {
    operation = [];
    operator = [];
    exit.value = '';
})