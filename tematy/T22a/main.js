const kg = document.querySelector("#kg")
const cm = document.querySelector("#cm")
const btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let x = parseInt(kg.value)
    let y = parseFloat(cm.value) / 100
    let BMI = x / Math.pow(y, 2)
    let wyn

    if (BMI < 16) {
            wyn = "Wygłodzenie"
    } else if (BMI >= 16 && BMI < 17) {
            wyn = "Wychudzenie"
    } else if (BMI >= 17 && BMI < 18.5) {
            wyn = "Niedowaga"
    } else if (BMI >= 18.5 && BMI < 25) {
            wyn = "Optinum"
    } else if (BMI >= 25 && BMI < 30) {
            wyn = "Nadwaga"
    } else if (BMI >= 30 && BMI < 35) {
            wyn = "Otyłość 1st."
    } else if (BMI >= 35 && BMI < 40) {
            wyn = "Otyłość 2st."
    } else if (BMI => 40) {
            wyn = "Otyłość 3st."
    }

    wynik.innerHTML =
        `
        Masa = ${x} <br>
        Wzrost = ${y} <br>
        BMI = ${BMI} <br>
        ${wyn}
        `
})