const numa1 = document.querySelector('#numa1');
const numb1 = document.querySelector('#numb1');
const numc1 = document.querySelector('#numc1');
const numa2 = document.querySelector('#numa2');
const numb2 = document.querySelector('#numb2');
const numc2 = document.querySelector('#numc2');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a1 = parseInt(numa1.value);
    let b1 = parseInt(numb1.value);
    let c1 = parseInt(numc1.value);
    let a2 = parseInt(numa2.value);
    let b2 = parseInt(numb2.value);
    let c2 = parseInt(numc2.value);

    let y = (c2*a1-c1*a2)/(b2*a1-a2*b1)
    let x = (c1-b1*y)/a1

    wynik.innerHTML =
        `
        a<sub>1</sub> = ${a1} <br>
        b<sub>1</sub> = ${b1} <br>
        c<sub>1</sub> = ${c1} <br>
        a<sub>2</sub> = ${a2} <br>
        b<sub>2</sub> = ${b2} <br>
        c<sub>2</sub> = ${c2} <br>
        <b>x = ${x}</b> <br>
        <b>y = ${y}</b> 
        `
})