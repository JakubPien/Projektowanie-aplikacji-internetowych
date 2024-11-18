const wyn = document.querySelector("#wyn")
const btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let p = parseInt(wyn.value);

    let punkty = Math.floor(p/10)
    let ocena = 0

    switch(punkty) {
        case 10:
            ocena = 5
            break;
        case 9:
            ocena = 5
            break;
        case 8:
            ocena = 4.5
            break;
        case 7:
            ocena = 4
            break;
        case 6:
            ocena = 3.5
            break;
        case 5:
            ocena = 3
            break;
        default:
            ocena = 2
    }

    wynik.innerHTML =
        `
        ${punkty}
        Ocena studenta to: ${ocena}
        `
})