const rok = document.querySelector("#rok")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let x = parseInt(rok.value)
    let prz
    if (x%4 === 0 && x%100 !== 0 || x%400 === 0) {
        prz = "jest przestępny"
    } else {
        prz = "nie jest przestępnu"
    }

    wynik.innerHTML =
        `
        Rok ${x} ${prz}
        `
})