let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    stars.push(new Star(random(width), random(height)));
  }
}

function draw() {
  background(0);
  for (let star of stars) {
    star.update();
    star.display();
  }
}

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 20);
    this.brightness = 0; // Ustaw jasność początkową na czarny
    this.direction = createVector(random(-1, 1), random(-1, 1)).normalize();
    this.scaleFactor = 1;
    this.angle = 0;
    this.rotationSpeed = random(0.01, 0.05); // Losowa prędkość obrotu
    this.rotationDirection = random([-1, 1]); // Losowy kierunek obrotu: -1 lub 1
  }

  update() {
    this.x += this.direction.x * random(0.5, 2);
    this.y += this.direction.y * random(0.5, 2);
    
    // Zmień kierunek, gdy gwiazdka wyjdzie poza ekran
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.direction.rotate(PI / 2);
    }

    // Migotanie
    this.brightness = 255 * abs(sin(frameCount * 0.1 + this.size)); // Zmiana jasności
    if (this.brightness < 0) this.brightness = 0; // Upewnij się, że jasność nie jest ujemna

    // Zmiana skali
    this.scaleFactor = 1 + 0.5 * sin(frameCount * 0.05);
    
    // Obrót gwiazdki
    this.angle += this.rotationSpeed * this.rotationDirection; // Użyj losowego kierunku obrotu
  }

  display() {
    // Interpolacja koloru od czarnego do żółtego
    let r = map(this.brightness, 0, 255, 0, 255); // Czerwony
    let g = map(this.brightness, 0, 255, 0, 204); // Zielony
    let b = map(this.brightness, 0, 255, 0, 0);   // Niebieski

    fill(r, g, b);
    noStroke();
    push(); // Zapisz aktualny stan
    translate(this.x, this.y); // Przenieś układ współrzędnych
    rotate(this.angle); // Obróć gwiazdkę
    scale(this.scaleFactor); // Zmień rozmiar gwiazdki
    beginShape();
    for (let i = 0; i < 5; i++) {
      let angle = TWO_PI / 5 * i - HALF_PI;
      let x = cos(angle) * 20; // Stała długość ramienia gwiazdy
      let y = sin(angle) * 20;
      vertex(x, y);
      angle += TWO_PI / 5;
      x = cos(angle) * 10; // Stała długość wnętrza gwiazdy
      y = sin(angle) * 10;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop(); // Przywróć wcześniejszy stan
  }
}
