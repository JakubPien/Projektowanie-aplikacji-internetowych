const numa = document.querySelector("#numa");
const numb = document.querySelector("#numb");
const numc = document.querySelector("#numc");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let a = parseInt(numa.value);
    let b = parseInt(numb.value);
    let c = parseInt(numc.value);
    let trojkat

    if (a*a + b*b === c*c)
        trojkat = "prostokątny"
    else if (a === b && b === c)
        trojkat = "równoboczny"
    else if (a === b || b === c)
        trojkat = "równoramienny"
    else
        trojkat = "dowolny"

    wynik.innerHTML =
        `
        A = ${a} <br>
        B = ${b} <br>  
        C = ${c} <br>
        Trójkąt jest ${trojkat}
        `
})