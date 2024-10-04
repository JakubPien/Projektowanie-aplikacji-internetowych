const liczba = document.querySelector('#liczba')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    let licz = parseFloat(liczba.value)

    let wy = Math.pow(licz,2) / Math.pow(1+Math.abs(licz),2)

    wynik.innerHTML =
        `
        x = ${licz}
        wartosc wyrazenia = ${wy}
        `
})