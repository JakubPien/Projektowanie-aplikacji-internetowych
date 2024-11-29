let x = prompt("Podaj liczbę: ",0)
let y = prompt("Podaj potegę: ",0)

function potega(x1, y) {
    for (let i=1; i <= y; i++)
        x1 *= x
    return x1
}

document.write("x = " + x + "<br>")
document.write("y = " + y + "<br>");
document.write("x<sup>y</sup> = " + potega(x,y))