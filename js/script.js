const numeral = document.querySelectorAll('dt');
const signals = document.querySelectorAll('dd');
let exit = document.getElementById('exit');
let values, operator = [], operation = [];


callback = (e) =>{
    values = e.target.innerText;
    exit.value += values;
}

numeral.forEach((i) => {
    i.addEventListener('click', callback);
});

signals.forEach((i) => {
    operator.push(i);
});

operator[5].addEventListener('click', () => {
    operation.unshift(parseFloat(exit.value));
    exit.value = '+';
    // exit.value = `${operation[0]}+`
    // exit = write(`${operation[0]}+`)
})

operator[4].addEventListener('click', () => {
    operation.unshift(parseFloat(exit.value));
    soma = operation[0] + operation[1];
    operation.unshift(soma);
    exit.value = operation[0];
})