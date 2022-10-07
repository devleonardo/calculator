const numeral = document.querySelectorAll('dt');
const signals = document.querySelectorAll('dd');
let exit = document.getElementById('exit');
let entry = [];
// let exit = document.querySelector('#exit');
let val = 0;

callback = (event) =>{
    val = event.target.innerText;
    // console.log(val);
}

numeral.forEach((index)=>{
    index.addEventListener('click', callback);
});

onclick = () => {
    firstClick = exit.value = val;
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