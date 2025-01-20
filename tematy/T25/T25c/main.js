class Czolg {

    constructor(n,k,a) {
        this.nazwa = n;
        this.kolor = k;
        this.amunicja = a;
    } ////////////// koniec konstruktora

    info = function () {
        document.write(`Cześć!!! jestem czołgiem. Mam na imie ${this.nazwa}. Jestem w kolorze ${this.kolor}. Ilość amunicji: ${this.amunicja}. </br>`);
    }

    pomaluj = function (nowyKolor) {
        this.kolor = nowyKolor;
        document.write(`Pomalowałem czołg na kolor ${this.kolor} </br>`);
}

    strzel = function () {
        if (this.amunicja > 0) {
        document.write(`BUM!!!!!!!!!!!.</br> Stan amunicji ${this.amunicja} </br>`);
        this.amunicja += -1;
    } else {
            document.write('Brak amunicji potrzeba przeładowania</br>');
        }

    }


    zaladuj = function (ileAmunicji) {
        this.amunicja += ileAmunicji;
        document.write(`Załadowałem amunicje. Obecny stan to: ${this.amunicja}</br>`)
    }
}//////////////////////////////////////////////////////


let rudy = new Czolg('rudy', 'zielony', 5);
let tygrys = new Czolg('tygry', 'pomarańczowy', 6);
console.log(rudy);
rudy.strzel();
rudy.info();
tygrys.info();
rudy.pomaluj('niebieski');
rudy.info();
rudy.zaladuj(5);
rudy.strzel();
rudy.strzel();
rudy.strzel();
rudy.info()