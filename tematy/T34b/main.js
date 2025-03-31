const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
const typ = document.querySelector('#typ_');
const cena_ = document.querySelector('#cena_');

btn.addEventListener('click', function (e) {
    let cena = cena_.value;
    let podatek = 0;
    if  (cena < 200) {
        podatek = 0;
    } else if (cena <= 1000) {
        if (typ.value === "d") {
            podatek = cena * (0.15 - 0.05)
        } else {
            podatek = cena * 0.15
        }
    } else if (typ.value === "d") {
        podatek = cena * (0.22 - 0.05)
    } else {
        podatek = cena * 0.22
    }


    podatek = podatek.toFixed(2);

    wynik.innerHTML =
        `
        Cena: ${cena}zł <br>
        Typ: ${typ.value} <br>
        Podatek: ${podatek}zł <br>
        `
})