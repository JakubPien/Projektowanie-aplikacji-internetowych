let x = prompt("Podaj liczbę: ",    0)
let y = prompt("Podaj potegę: ",0)

function potega(x, y) {
    let pot;
    for (let i = 0; i < y; i++) {
        pot *= x;
    }
    return pot;
}

document.write("x = " + x + "<br>")
document.write("y = " + y + "<br>");
document.write("x<sup>y</sup> = " + potega(x,y))