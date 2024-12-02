const liczbaa = document.querySelector("#a");
const liczbab = document.querySelector("#b");
const btn = document.querySelector("button");

function wspolnyDzielnik(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


btn.addEventListener("click", function () {
    let a = parseInt(liczbaa.value)
    let b = parseInt(liczbab.value)
    wynik.innerHTML = wspolnyDzielnik(a,b);
});