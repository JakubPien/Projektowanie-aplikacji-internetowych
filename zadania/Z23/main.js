const wartosca = document.querySelector('#wartosca');
const wartoscb = document.querySelector('#wartoscb');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a = parseFloat(wartosca.value);
    let b = parseFloat(wartoscb.value);
    let n

    if (a <= 0 || b <= 0) {
        wynik.innerHTML = `nieprawidlowe dane`
    }
    if (b <= a/2) {
        wynik.innerHTML = `nieprawidlowe dane`
    }

    else {
        n = Math.sqrt(b*b - (a/2)*(a/2))
    }

    wynik.innerHTML =
        `
        a = ${a} <br>
        b = ${b} <br>
        Wartość wyrażenia: ${n}
        `
})