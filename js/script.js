const numeral = document.querySelectorAll('dt');
const signals = document.querySelectorAll('dd');
const clear = document.querySelector('#clear');
let exit = document.querySelector('#exit');
let values, operator = [], operation = [];
const operators_regex = /[*+x/-\s]/; //   /[+-\s]/; CAPTURA OS CARACTERES + OU - OU / OU *

// PEGA CADA CLICK E ADICIONA UM APÓS O OUTRO
const callback = (e) => {
    values = e.target.innerText;
    exit.value += values;
};

//  EVENTO DE CLICK PARA CADA NUMERO
numeral.forEach((i) => {
    i.addEventListener('click', callback);
});

// PEGA TODOS O OPERADORA E COLOCAR NUM ARRAY
signals.forEach((i) => {
    operator.push(i);
});

// EVENTO DE CLICK AO OPERADOR +, -, ÷, x
// PEGA O VALOR TECLADO E ADICIONA NO INICIO DE UM ARRAY
// EXIBE O VALOR NO VISOR COM O OPERADOR SELECIONADO
[operator[0], operator[1], operator[2], operator[5]].forEach(e=> {
    e.addEventListener('click', (event) => {
        console.log(event.target.innerText);    
        exit.value += event.target.innerText;
    });
});

// EVENTO DE CLICK AO OPERADOR =
// PEGA O SEGUNDO VALOR TECLADO E ADICIONA NO INICIO DO ARRAY
// SOMA OS DOIS VALORES RECEBIDOR NO ARRAY
// PEGA O VALOR DA SOMA E ADICIONA AO INICIO DO ARRAY
// EXIBE O RESULTADO DA OPERAÇÃO NO VISOR
operator[4].addEventListener('click', () => {
    console.log(
        exit.value.replaceAll("x", "*").replaceAll("÷", "/").split(operators_regex).toString(), 
        exit.value.replaceAll("x", "*").replaceAll("÷", "/").split(operators_regex).length
    );

    if (exit.value.replaceAll("x", "*").replaceAll("÷", "/").split(operators_regex).length === 1) return; //    SE HOUVER APENAS UM CONJUNTO DE NUMERO FORA O OPERADOR, RETORNA

    //const soma = exit.value.split(operators_regex).reduce((prev, curr)=> Number(prev) + Number(curr), 0); //    CORREÇÃO DO RESULTADO NaN
    //operation.unshift(soma);

    const soma = eval(exit.value.replaceAll("x", "*").replaceAll("÷", "/")); // ALTERAÇÃO DA FORMA DE SOMA
    exit.value = soma; // CORREÇÃO RESULTADO
});

// LIMPA A TELA E OS ARRAYS PARA INICIAR UMA NOVA OPERAÇÃO
clear.addEventListener('click', () => {
    operation = [];
    operator = [];
    exit.value = '';
});