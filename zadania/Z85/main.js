const num = document.querySelector("#num")
const min = document.querySelector("#min")
const max = document.querySelector("#max")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let n = parseInt(num.value)
    let mi = parseInt(min.value)
    let ma = parseInt(max.value)
    let los
    let wyn = ""

    for (let i = 1; i <= n; i++) {
        los = Math.floor(Math.random() * (ma - (mi-1)) + mi )
        wyn += `${los} `
    }


    wynik.innerHTML =
        `
        Wylosowane liczby: ${wyn}
        `
})