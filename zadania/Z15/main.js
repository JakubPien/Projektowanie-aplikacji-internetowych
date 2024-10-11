const licz = document.querySelector("#liczba")
const btn = document.querySelector("button")

btn.addEventListener("click", function() {
    let x = parseFloat(licz.value)

    let z = Math.floor(x)
    let a = z * 0
    let b = z * 1
    let c = z * 2
    let d = z * 3
    let e = z * 4
    let f = z * 5
    let g = z * 6
    let h = z * 7
    let i = z * 8
    let j = z * 9
    let k = z * 10

    wynik.innerHTML =
        `
        x = ${z} <br>
        0 x ${z} = ${a} <br>
        1 x ${z} = ${b} <br>
        2 x ${z} = ${c} <br>
        3 x ${z} = ${d} <br>
        4 x ${z} = ${e} <br>
        5 x ${z} = ${f} <br>
        6 x ${z} = ${g} <br>
        7 x ${z} = ${h} <br>
        8 x ${z} = ${i} <br>
        9 x ${z} = ${j} <br>
        10 x ${z} = ${k}
        `
})