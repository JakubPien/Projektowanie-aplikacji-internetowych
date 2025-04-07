const btn = document.querySelector('button');
const wynik = document.querySelector("#wynik");
const wlosy = document.querySelectorAll(`input[name="wlosy"]`);




btn.addEventListener('click', e => {
    let wartosc = ''

    wlosy.forEach(radio => {
        if (radio.checked) {
           wartosc = radio.value;
        }
    })

    wynik.innerHTML =
        `
        Cena strzyżenia ${wartosc}
        `
})