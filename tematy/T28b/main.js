const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', () => {
    const urodziny = document.querySelector('#urodziny').value;

    let info;

    const urodz = new Date(urodziny);
    const dzisiaj = new Date();

    const jescze = Math.ceil((urodz - dzisiaj) / (1000 * 3600 * 24));

    if (urodz > dzisiaj) info = `Masz urodziny za ${jescze} dni`;
    else if (urodz.getFullYear() !== dzisiaj.getFullYear()) info = `Ten rok już był`;
    else if (jescze < 0) info = `Twoje urodziny już były w tym roku, ${-jescze} dni temu`;
    else info = "Wszystkiego Najlepszego!🎉"

    wynik.innerHTML = info;
})
