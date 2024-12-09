const num = document.querySelector("#num")
const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {
    let n = parseInt(num.value)
    let ul
    let zul
    let wyn = " "


    for (let i = 1; i <= n; i++) {
        ul = 1/i
        zul = ul.toFixed(6)
        wyn += `1/${i} - ${zul} <br>`
    }


    wynik.innerHTML =
        `
        ${wyn}
        `
})