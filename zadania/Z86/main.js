const num = document.querySelector("#num")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let x = parseInt(num.value)
    let los
    let wyn = ""

    for (let i = 1; i <= x; i++) {
        los = Math.floor(Math.random() * (9 - 1) + 1 )
        wyn += `${los} `
        for (let j = 1; j <= los ; j++) {
            wyn += "|"
        }
        wyn += "<br>"
    }


    wynik.innerHTML =
        `
        ${wyn}
        `
})