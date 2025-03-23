const btn = document.querySelector("button");

btn.addEventListener('click', function() {
    const wartosc = parseInt(document.querySelector('input[type="number"]').value);

    if (isNaN(wartosc) || wartosc < 0 || wartosc > 360) {
        alert("Proszę wprowadzić liczbę z zakresu 0-360.");
        return;
    }

    const komorki = document.querySelectorAll('td');
    const nasycenieWartosc = [100, 80, 60, 40, 20]; // Wartości nasycenia dla komórek

    for (let i = 0; i < komorki.length; i++) {
        const nasycenie = nasycenieWartosc[i % nasycenieWartosc.length]; // Użycie modulo (%) dla cyklicznego dostępu do wartości
        komorki[i].style.backgroundColor = `hsl(${wartosc}, ${nasycenie}%, 50%)`;
    }
});
