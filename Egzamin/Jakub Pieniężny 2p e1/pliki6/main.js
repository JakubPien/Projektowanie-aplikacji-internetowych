const btn1 = document.querySelector("#indiago");
const btn2 = document.querySelector("#olive");
const btn3 = document.querySelector("#steelblue");
const blok = document.querySelector("#blokPrawy");

btn1.addEventListener("click", function() {
    blok.style.backgroundColor = "indigo";
})

btn2.addEventListener("click", function() {
    blok.style.backgroundColor = "Olive";
})

btn3.addEventListener("click", function() {
    blok.style.backgroundColor = "Steelblue";
})


//kolory strony


const kolor = document.getElementById("kolor");

kolor.addEventListener("change", function() {
    blok.style.color = kolor.value;
})


//zmiana koloru czcionki


const rozmiar = document.querySelector("#rozmiar");

rozmiar.addEventListener("blur", function() {
    blok.style.fontSize = rozmiar.value;
})

//zmiana rozmiaru czcionki


const ramka = document.querySelector("#ramka");
const img = document.querySelector("#myImg");

ramka.addEventListener("change", function() {
    if (ramka.checked) {
        img.style.border = "2px solid white";
    } else {
        img.style.border = "none";
    }

})

//pojawianie się ramki


const stylListy = document.querySelectorAll(`input[name="stylListy"]`);
const lista = document.getElementById("lista");

stylListy.forEach(radio => {
    radio.addEventListener("change", function() {
        if (radio.checked) {
            lista.style.listStyleType = radio.value;
        }
    })
})