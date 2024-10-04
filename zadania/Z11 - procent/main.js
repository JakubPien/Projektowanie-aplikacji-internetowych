const procent = document.querySelector('#procent')
const wartosc = document.querySelector('#wartosc')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    let pro = parseFloat(procent.value)
    let war = parseFloat(wartosc.value)

    let proc =  (war * pro) / 100

    wynik.innerHTML =
        `
        ${pro}% z ${war} to: ${proc}
        `
})