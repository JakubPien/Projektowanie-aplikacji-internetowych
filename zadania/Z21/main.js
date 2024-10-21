const boka = document.querySelector('#boka');
const bokb = document.querySelector('#bokb');
const wysokosc = document.querySelector('#wysokosc');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a = parseFloat(boka.value);
    let b = parseFloat(bokb.value);
    let h = parseFloat(wysokosc.value);

    let pole = Math.floor((a+b)/2*h)

    wynik.innerHTML =
        `
        a = ${a} <br>
        b = ${b} <br>
        pole trapezu wynosi ${pole}
        `

})