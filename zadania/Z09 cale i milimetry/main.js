const cale = document.querySelector('#cale')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    let cal = parseFloat(cale.value)

    let mm = (cal * 25.3995)

    wynik.innerHTML =
        `
        ${cal} cali to ${mm} mm
        `
})