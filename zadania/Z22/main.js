const boka = document.querySelector('#boka');
const bokb = document.querySelector('#bokb');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a = parseFloat(boka.value);
    let b = parseFloat(bokb.value);

    let c2 = Math.pow(a,2) + Math.pow(b,2);
    let c = Math.sqrt(c2,2)
    wynik.innerHTML =
        `
        a = ${a} <br>
        b = ${b} <br>
        Wynik = c = ${c}
        `
})