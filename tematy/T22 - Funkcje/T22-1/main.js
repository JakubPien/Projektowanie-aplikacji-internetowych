let liczba = prompt("Podaj liczbę: " ,0)

function wartosc_baz(a) {
    if (a > 0)
        return a
    else
        return a * -1
}/////////////////////////////

function wartosc_baz2(a) {
    let wynik = (a>0) ? a : -a;
    return wynik
}//////////////////////////////

document.write("twoja liczba wynosi: " + liczba + "<br>");
document.write("Wartosc bezwzględna wynosi: " + wartosc_baz2(liczba));