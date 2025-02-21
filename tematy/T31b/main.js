const rysuj = document.querySelector("button");
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const ramka = document.querySelector('div');

rysuj.addEventListener('click', function() {
    const x = parseInt(a.value);
    const y = parseInt(b.value);


    ramka.innerHTML = rysujSzerokosc(x); // Górny rząd
    for (let i = 0; i < y - 2; i++) {
        ramka.innerHTML += rysujSrodek(x); // Środkowe rzędy
    }
    ramka.innerHTML += rysujSzerokosc(x); // Dolny rząd
});

function rysujSzerokosc(x) {
    let wiersz = '';
    for (let i = 0; i < x; i++) {
        wiersz += '|';
    }
    return wiersz + '<br>';
}

function rysujSrodek(x) {
    let wiersz = '|';
    for (let i = 0; i < x - 3; i++) {
        wiersz += '&nbsp;';
    }
    wiersz += '|<br>';
    return wiersz;
}
