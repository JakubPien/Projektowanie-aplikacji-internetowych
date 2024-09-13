const imie = document.querySelector(`#imie`)
const wynik = document.querySelector(`#wynik`)
const btn = document.querySelector(`button`)

btn.addEventListener(`click`, function () {

    let imie_tekst = imie.value
   // wynik.innerHTML = `Cześć ` +imie_tekst + `!!!`
    wynik.innerHTML =
        `
        Cześć ${imie_tekst} !!!! <br> Miło Cię widzieć na naszej stronie.
        `
})