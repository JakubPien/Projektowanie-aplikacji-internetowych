const dzien = document.querySelector("#dzien")
const btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let x = parseInt(dzien.value)
    let nazwa

    switch (x) {
        case 1:
            nazwa = "poniedziałek"
            break;
        case 2:
            nazwa = "wtorek"
            break;
        case 3:
            nazwa = "środa"
            break;
        case 4:
            nazwa = "czwartek"
            break;
        case 5:
            nazwa = "piątek"
            break;
        case 6:
            nazwa = "sobota"
            break;
        case 7:
            nazwa = "niedziela"
            break;
        default:
            nazwa = "liczba nie mieści sie w przedziale (od 1 do 7)"
    }


    wynik.innerHTML =
        `
        Podana liczba to: ${x} <br>
        Nazwa dnia tygodzia: ${nazwa}
        `
})