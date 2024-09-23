 const liczba_a = document.querySelector('#a')
 const liczba_b = document.querySelector('#b')
 const liczba_c = document.querySelector('#c')
 const liczba_d = document.querySelector('#d')

 const wynik = document.querySelector('#wynik')
 const btn = document.querySelector('button')
 btn.addEventListener('click', function () {
     let a = parseInt(liczba_a.value)
     let b = parseInt(liczba_b.value)
     let c = parseInt(liczba_c.value)
     let d = parseInt(liczba_d.value)

     let suma = a + b + c + d
     let srednia = suma / 4

     console.log(suma)
     console.log(srednia)

     wynik.innerHTML =
         `
         a = ${a}<br>
         b = ${b}<br>
         c = ${c}<br>
         d = ${d}<br>
         suma = ${suma}<br>
         średnia = ${srednia}<br>
         średnia zaokrąglona = ${srednia.toFixed(3)}
        
         `

 })