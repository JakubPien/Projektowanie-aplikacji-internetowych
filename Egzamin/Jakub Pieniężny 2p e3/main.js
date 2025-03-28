const wynik = document.querySelector("#wynik");
const imie = document.querySelector("#imie");
const nazwisko = document.querySelector("#nazwisko");
const email = document.querySelector("#email");
const usluga = document.querySelector("#usluga");

const btn = document.querySelector("button[type='submit']");

btn.addEventListener("click", function () {
    event.preventDefault();
    let imi = imie.value;
    let nazwisk = nazwisko.value;
    let emai = email.value.toLowerCase();
    let uslug = usluga.value;

    wynik.innerHTML =
        `
        ${imi} ${nazwisk} </br>
        ${emai} </br>
        Usługa: ${uslug}
        `
});