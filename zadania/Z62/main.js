const ocena = document.querySelector('#ocena');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let x = parseInt(ocena.value);
    let nazwa

    switch (x) {
        case 0:
            nazwa = "nieklasyfikowany"
            break;
        case 1:
            nazwa = "poprawny"
            break;
        case 2:
            nazwa = "poprawny"
            break;
        case 3:
            nazwa = "poprawny"
            break;
        case 4:
            nazwa = "dobry"
            break;
        case 5:
            nazwa = "dobry"
            break;
        case 6:
            nazwa = "wyróżniający"
            break;
        default:
            nazwa = "niewłaściwa liczba"
    }

    wynik.innerText =
        `
        Podana liczba to: ${x} <br>
        Nazwa oceny: ${nazwa}
        `
})