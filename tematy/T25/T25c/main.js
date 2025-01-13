class Czolg {
    nazwa = 'Rudy';
    kolor = 'Zielony';
    amunicja_ilość = "10";

    info = function () {
        document.write(`Cześć!!! jestem czołgiem. Mam na imie ${this.nazwa}. Jestem w kolorze ${this.kolor}. Ilość amunicji: ${this.amunicja_ilość}. </br>`);
    }

    pomaluj = function (nowyKolor) {
        this.kolor = nowyKolor;
        document.write(`Pomalowałem czołg na kolor ${this.kolor} </br>`);
}

    strzel = function () {

    }
}//////////////////////////////////////////////////////


let rudy = new Czolg();
console.log(rudy);
rudy.info();
rudy.pomaluj('niebieski');
rudy.info();