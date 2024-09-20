const liczba_a = document.querySelector(`#a`)
const liczba_b = document.querySelector(`#b`)
const wynik = document.querySelector(`#wynik`)

const btn = document.querySelector(`button`)

btn.addEventListener(`click`, function (){
    let a = parseFloat(liczba_a)
    let b = parseFloat(liczba_b)

    let iloraz = a / b
    wynik.innerHTML =
        `
        a = ${a} <br>
        b = ${b} <br>
        iloraz = ${iloraz.toFixed(2)}
        `
})