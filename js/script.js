const numeral = document.querySelectorAll('dt');
const signals = document.querySelectorAll('dd');
let exit = document.getElementById('exit');
let entry = [];
let val1 = 0;
let val2 = 0;

callback = (event) =>{
    val1 = event.target.innerText;
    val2 = event.target.innerText;
    // console.log(val);
}

numeral.forEach((index) => {
    index.addEventListener('click', callback);
});

signals.forEach((index) => {
    index.addEventListener('click', callback);
})

onclick = () => {
    click1 = exit.value = val1;
    click2 = exit.value = val2;
    // exit.value +val;
    // firstClick+val;
}

// calculo = () => {
//     // entry.push(val);
    
// }



// signals.forEach((index)=>{
//     index.addEventListener('click', calculo)
// });

// document.querySelector('#exit').value = callback();