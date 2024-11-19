const numa = document.querySelector("#numa");
const numb = document.querySelector("#numb");
const numc = document.querySelector("#numc");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let a = parseInt(numa.value);
    let b = parseInt(numb.value);
    let c = parseInt(numc.value);
    let trojkat

    if (a < 0 || b < 0 || c < 0)
        trojkat = "Podane wielkości nie tworzą trójkąta"
    else if (a*a + b*b === c*c)
        trojkat = " Trójkąt jest prostokątny"
    else if (a === b && b === c)
        trojkat = " Trójkąt jest równoboczny"
    else if (a === b || b === c || a === c)
        trojkat = " Trójkąt jest równoramienny"
    else
        trojkat = " Trójkąt jest dowolny"

    wynik.innerHTML =
        `
        A = ${a} <br>
        B = ${b} <br>   
        C = ${c} <br>
        ${trojkat}
        `
})