const ocenaKlienta = document.querySelector("#ocenaKlienta");
const ocenaKolorem = document.querySelector("#ocenaKolorem");
const date = document.querySelector("#data");
const btn = document.querySelector("button");
let tekst = "ocena kolorem";

btn.addEventListener("click", function () {
    let ocena = ocenaKlienta.value



    wynik.innerHTML =
        `
        Usługę wykonano: ${date} <br>
        Ocena Klienta: ${ocena} <br>
        Ocena Kolorem: ${tekst} <br>
        `
});
ocenaKolorem.addEventListener("input", function () {
    const kolor = ocenaKolorem.value;
   tekst.style.color = kolor;
wynik.style.color = kolor;
})