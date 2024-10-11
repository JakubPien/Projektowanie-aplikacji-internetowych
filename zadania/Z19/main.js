const stopnie = document.querySelector('#stopnie');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let stop = parseFloat(stopnie.value);

    let rad = (Math.PI/180)*stop

    wynik.innerHTML =
        `
        Wynik dla podanej wartości kątowej ${stop} = ${rad} radianów
        `
});