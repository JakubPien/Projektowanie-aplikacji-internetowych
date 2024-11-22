const num = document.querySelector("#num")
const btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let x = parseInt(num.value)
    let miesiac

    switch (x) {
        case 1:
            miesiac = "styczeń"
            break;
        case 2:
            miesiac = "luty"
            break;
        case 3:
            miesiac = "marzec"
            break;
        case 4:
            miesiac = "kwiecień"
            break;
        case 5:
            miesiac = "maj"
            break;
        case 6:
            miesiac = "czerwiec"
            break;
        case 7:
            miesiac = "lipiec"
            break;
        case 8:
            miesiac = "sierpień"
            break;
        case 9:
            miesiac = "wrzesień"
            break;
        case 10:
            miesiac = "październik"
            break;
        case 11:
            miesiac = "listopad"
            break;
        case 12:
            miesiac = "grudzień"
            break;
        default:
            miesiac = "liczba nie mieści się w przedziale"
    }


    wynik.innerHTML =
        `
        Podana liczba to: ${x} <br>
        Nazwa miesiąca: ${miesiac}
        `
})