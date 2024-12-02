const liczbaa = document.querySelector("#a");
const liczbab = document.querySelector("#b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

function liczbaWkolorze(a,b) {

    if (a>b) {
        return `<span class='red'>${a}</span> <span class='green'>${b}</span>`
    } else if (b>a) {
        return `<span class='red'>${b}</span> <span class='green'>${a}</span>`
    } else {
        return `<span class='blue'>${b}</span> <span class='blue'>${a}</span>`
    }

}

btn.addEventListener("click", function () {
    let a = parseInt(liczbaa.value)
    let b = parseInt(liczbab.value)
    wynik.innerHTML = liczbaWkolorze(a,b);
});