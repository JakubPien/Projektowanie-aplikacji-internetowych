const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let licz = parseInt(num1.value);
    let mian = parseInt(num2.value);


    if (mian === 0) {
        wynik.innerHTML = 'Nie mogę podzielić przez 0'
    } else {
        let cal = Math.floor(licz / mian)
            if (cal === 0) {
                cal = " "
            }
        let licz_2 = licz % mian
        wynik.innerHTML =
            `
            Licznik = ${licz} <br>
            Mianownik = ${mian} <br>
            Ułamek własciwy = ${cal} <sup>${licz_2}</sup>/<sub>${mian}</sub>
            `
    }
})