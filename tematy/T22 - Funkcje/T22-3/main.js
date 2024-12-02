const miesiac = document.querySelector('#miesiac');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector("button");

function miesiacSlownie(a) {
    let wynik = " "
    switch (a) {
        case 1: wynik = "styczeń"; break;
        case 2: wynik = "luty"; break;
        case 3: wynik = "marzec"; break;
        case 4: wynik = "kwiecień"; break;
        case 5: wynik = "maj"; break;
        case 6: wynik = "czerwiec"; break;
        case 7: wynik = "lipiec"; break;
        case 8: wynik = "sierpień"; break;
        case 9: wynik = "wrzesień"; break;
        case 10: wynik = "październik"; break;
        case 11: wynik = "listopad"; break;
        case 12: wynik = "grudzień"; break;
        default: wynik = "niepoprawny";
    }
    return wynik;
}

btn.addEventListener("click", function () {
    let liczba = parseInt(miesiac.value)
    wynik.innerHTML = miesiacSlownie(liczba);

});