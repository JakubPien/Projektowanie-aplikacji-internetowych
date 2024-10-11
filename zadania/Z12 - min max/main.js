const mi = document.querySelector("#min")
const ma = document.querySelector("#max")
const btn = document.querySelector("button")

btn.addEventListener("click", function() {
    let min = parseFloat(mi.value)
    let max = parseFloat(ma.value)

    let a = Math.floor( Math.random() * (max-min) + min)
    let b = Math.floor( Math.random() * (max-min) + min)
    let c = Math.floor( Math.random() * (max-min) + min)
    let d = Math.floor( Math.random() * (max-min) + min)
    let e = Math.floor( Math.random() * (max-min) + min)

    let suma = a + b + c + d + e
    let iloczyn = a * b * c * d * e
    let srednia = (a + b + c + d + e) / 5

    wynik.innerHTML =
        `
        Wylosowane liczby:
        <ul>
        <li>${a}</li>
        <li>${b}</li>
        <li>${c}</li>
        <li>${d}</li>
        <li>${e}</li>
        </ul>
        
        Suma liczb: ${a} + ${b} + ${c} + ${d} + ${e} = ${suma} <br>
        Iloczyn liczb: ${a} * ${b} * ${c} * ${d} * ${e} = ${iloczyn} <br>
        Średnia liczb = ${srednia} <br>
        `


})