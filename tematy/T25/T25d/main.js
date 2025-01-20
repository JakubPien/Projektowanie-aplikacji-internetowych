class Punkt {

    constructor(nazwa,wspolrzednaX,wspolrzednaY) {
        this.nazwa = nazwa;
        this.wspX = wspolrzednaX;
        this.wspY = wspolrzednaY;
    }
    info() {
        document.write(`Punk o nazwie: ${this.nazwa}. Ma współrzędne x: ${this.wspX}, y: ${this.wspY} </br>`);
    }
}

class odcinek {
    nazwa;
    punkt1;
    punkt2;

    constructor(nazwa, punkt_1, punkt_2) {
        this.nazwa = nazwa;
        this.punkt1 = new Punkt(punkt_1);
        this.punkt2 = new Punkt(punkt_2);
    }

    dlugosc() {
        document.write(`${Math.sqrt(Math.pow(punkt2.wspX - punkt1.wspX,2) + Math.pow(punkt2.wspY - punkt1.wspY, 2))} </br>`)
    }

    info() {
        document.write(`Odcienk ${odc1.nazwa} o punktach "${punkt1.nazwa}" oraz "${punkt2.nazwa}" ma długość: </br>`)
    }
}

let punkt1 = new Punkt("Dom", 50, 100);
let punkt2 = new Punkt("Szkoła", 70, 150);
punkt1.info();
punkt2.info();

let odc1 = new odcinek("Długość trasy do szkoły", punkt1, punkt2);
odc1.info();
odc1.dlugosc();