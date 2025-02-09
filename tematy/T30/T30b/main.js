const btn = document.querySelector("button");
const wielkosc = document.querySelector("#wielkosc");

btn.addEventListener('click', () => {
    const n = parseInt(wielkosc.value);
    const szachownica = document.getElementById('szachownica');
    szachownica.style.width = `${n * 50}px`; // 50px na każdą komórkę
    szachownica.style.height = `${n * 50}px`;
    szachownica.innerHTML = ''; // Czyści szachownicę przed nowym generowaniem

    generujSzachownice(n);
});


function generujSzachownice(n) {
    const szachownica = document.getElementById('szachownica');
    for (let i = 0; i < n; i++) {
        const wiersz = document.createElement('div');
        wiersz.style.display = 'flex'; // Ustaw wiersz jako flex
        for (let j = 0; j < n; j++) {
            const komorka = document.createElement('div');
            komorka.style.width = '50px';
            komorka.style.height = '50px';
            komorka.style.backgroundColor = (i + j) % 2 === 0 ? 'white' : 'black';
            wiersz.appendChild(komorka);
        }
        szachownica.appendChild(wiersz);
    }
}