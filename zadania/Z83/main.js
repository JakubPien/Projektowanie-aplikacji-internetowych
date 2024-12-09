const numa = document.querySelector("#numa")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let x = parseInt(numa.value)
    let wyn = ""

    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= x; j++) {
            if (i === j) {
                wyn += "1"
            }   else {
                wyn += "0"
            }
        }
        wyn += "<br>"
    }


    wynik.innerHTML =
        `
        ${wyn}
        `
})