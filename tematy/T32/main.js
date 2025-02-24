const ocenaKlienta = document.querySelector("#ocenaKlienta");
const ocenaKolorem = document.querySelector("#ocenaKolorem");
const date = document.querySelector("#date");
const btn = document.querySelector("button");
const wynik = document.querySelector("#wynik");
const ocenaKoloremSpan = document.querySelector("#ocenaKoloremSpan");

btn.addEventListener("click", function () {
    let ocena = ocenaKlienta.value
    let data = date.value

    ocenaKoloremSpan.style.color = ocenaKolorem.value;

    wynik.innerHTML =
        `
        Usługę wykonano: ${data} <br>
        Ocena Klienta: ${ocena} <br>
        Ocena Kolorem: <span style="color:${ocenaKolorem.value}">ocena kolorem</span> <br>
        `
});
