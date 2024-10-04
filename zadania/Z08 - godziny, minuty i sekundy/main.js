const sekundy = document.querySelector('#sekundy')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    let s = parseFloat(sekundy.value)

    let god = Math.floor(s / 3600)
    let min = Math.floor((s % 3600) / 60)
    let sek = Math.floor((s % 3600) % 60)


wynik.innerHTML =
    `
     ${god}g${min}m${sek}
    `

})