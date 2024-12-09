const numa = document.querySelector("#numa")
const numb = document.querySelector("#numb")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let x = parseInt(numa.value)
    let y = parseInt(numb.value)
    let wyn = ""

    for (let i = 1; i <= y; i++) {
        for (let j = 1; j <= x; j++) {
            wyn += "X"
        }
        wyn += "<br>"
    }


    wynik.innerHTML =
        `
        A - ilość znaków w wierszu: ${x} <br>
        B - ilość wierszy: ${y} <br> <br>
        ${wyn}
        `
})