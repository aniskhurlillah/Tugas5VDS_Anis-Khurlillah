let zombies = [];

function setup() {
  createCanvas(600, 400);
  r = 3;

  for (let i = 0; i < 60; i++) {
    zombies.push(new Mover());
  }
}

function draw() {
  background("black");

  for (let i = 0; i < zombies.length; i++) {
    zombies[i].gerakCuy();
    zombies[i].tampil();
    zombies[i].cekBatas();
  }
}

class Mover {
  constructor() {
    this.location = createVector(random(width / 2), random(height / 2));

    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.01, -0.01);
    this.panjanglebar = random(0, 0);
  }

  tampil() {
    // Menampilkan emoji
    textSize(20);
    text("💀", this.location.x, this.location.y);
  }

  gerakCuy() {
    var mouse = createVector(mouseX, mouseY);
    var w = p5.Vector.sub(mouse, CENTER);
    noStroke()

    // Perubahan warna dan bentuk dihapus karena sekarang menggunakan emoji

    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = (2, 10);

    arahMouse.normalize();
    arahMouse.mult(0.5);

    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }

  cekBatas() {
    if (this.location.x < 0 || this.location.x > width) {
      this.velocity.x = -1 * this.velocity.x
    } else if (this.location.y < 0 || this.location.y > height) {
      this.velocity.y = -1 * this.velocity.y
    }
  }
}