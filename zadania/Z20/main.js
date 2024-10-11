const liczba = document.querySelector('#liczba');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let x = parseFloat(liczba.value);

    let kwa = Math.pow(x, 2)
    let sze = Math.pow(x, 3)
    wynik.innerHTML =
        `
        ${x}<sup>2</sup> to: ${kwa} <br>
        ${x}<sup>3</sup> to: ${sze}
        `
})