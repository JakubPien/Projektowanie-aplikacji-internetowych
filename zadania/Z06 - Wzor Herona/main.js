

const liczba_a = document.querySelector("#a")
const liczba_b = document.querySelector("#b")
const liczba_c = document.querySelector("#c")
const wynik = document.querySelector(".wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = parseFloat(liczba_c.value)

    let wzor = (a + b + c)*(a + b + c)*(a + b + c)*(a + b + c)
    let pole = Math.sqrt(wzor)


    wynik.innerHTML =
        `
        a = ${a} <br>
        b = ${b} <br>
        c = ${c} <br>
        
        Pole = ${pole} <br>
        `
})