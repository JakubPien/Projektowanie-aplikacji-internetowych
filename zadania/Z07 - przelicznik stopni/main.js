const stopnie_C = document.querySelector(`#c`)
const btn = document.querySelector(`button`)

btn.addEventListener(`click`, function() {
    let c = parseFloat(stopnie_C.value)

    let k = c + 273.15
    let f = ( c * 9 / 5 ) + 32

    wynik.innerHTML =
        `
        T <sub>Celsiusz</sub> = ${c} <br>
        T <sub>Fahrenheit</sub> = ${f} <br>
        T <sub>Kelvin</sub> = ${k} <br>
        `
})