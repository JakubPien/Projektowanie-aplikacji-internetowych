const min = document.querySelector("#min")
const max = document.querySelector("#max")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let x = parseInt(min.value)
    let y = parseInt(max.value)

    let los1 = Math.floor(Math.random() * (x - y + 1) + y)
    let los2 = Math.floor(Math.random() * (x - y + 1) + y)
    let z
    if (los1 > los2) {
        z = ">"
    } else if (los2 > los1) {
        z = "<"
    } else {
        z = "="
    }

    wynik.innerHTML =
        `
        Zakres losowań od ${x} do ${y} <br>
        Wylosowana liczba1 = ${los1} <br>
        Wylosowana liczba2 = ${los2} <br>
        ${los1} ${z} ${los2}
        `
})