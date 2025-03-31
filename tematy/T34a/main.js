const wynik = document.querySelector('#wynik');
const numa = document.querySelector('#num_a');
const numb = document.querySelector('#num_b');
const btn = document.querySelector('button');



function schematBlokowy(a,b) {

    while (a !== b) {
        if (a > b) {
            a -= b
        } else {
            b -= a
        }
    }
    return a;
}

btn.addEventListener('click', function (e) {
    let a = numa.value;
    let b = numb.value;

   wynik.innerHTML =
   `
   a = ${schematBlokowy(a,b)}
   `
   ;
})