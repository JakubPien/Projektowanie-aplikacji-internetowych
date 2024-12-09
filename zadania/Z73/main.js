const A = document.querySelector("#A")
const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {
    let a = parseInt(A.value)
    let wyn = " "

    for(let i = 1; i <= a; i++){
        if (i%2 === 0) {
           wyn += `${i};`
        }
    }

    wynik.innerHTML =
        `
        Liczby parzyste od 1 do ${a} <br>
        ${wyn}
        
        `
})