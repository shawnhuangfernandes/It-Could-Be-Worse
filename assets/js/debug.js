var boatBounds, playerRect, distance;

var Clamp = Phaser.Math.Clamp;

function preload() {
  this.load.image('underwater', 'assets/skies/underwater3.png');
  this.load.image('player', 'assets/sprites/phaser-dude.png');
}


function update() {
  this.player.setVelocity(0);

  if (this.cursors.left.isDown) {
    this.player.setVelocityX(-160);
  } else if (this.cursors.right.isDown) {
    this.player.setVelocityX(160);
  }

  if (this.cursors.up.isDown) {
    this.player.setVelocityY(-160);
  } else if (this.cursors.down.isDown) {
    this.player.setVelocityY(160);
  }

  var body = this.player.body;

  projectRect(playerRect, body, 1 / this.physics.world.fps);
  setBlocked(body.blocked, playerRect, boatBounds);
  clampVelocity(body.velocity, body.blocked);

  this.debug
    .clear()
    .strokePoints(boatBounds.points)
    .strokeRectShape(playerRect);
}

function projectRect(rect, body, time) {
  distance.copy(body.velocity).scale(time);
  Phaser.Geom.Rectangle.CopyFrom(body, rect);
  Phaser.Geom.Rectangle.OffsetPoint(rect, distance);
}

function clampVelocity(velocity, blocked) {
  if (blocked.left) velocity.x = Clamp(velocity.x, 0, Infinity);
  if (blocked.right) velocity.x = Clamp(velocity.x, 0, -Infinity);
  if (blocked.up) velocity.y = Clamp(velocity.y, 0, Infinity);
  if (blocked.down) velocity.y = Clamp(velocity.y, 0, -Infinity);
}

function setBlocked(blocked, rect, bounds) {
  if (!bounds.contains(rect.left, rect.top)) {
    blocked.left = true;
    blocked.up = true;
  }
  if (!bounds.contains(rect.left, rect.bottom)) {
    blocked.left = true;
    blocked.down = true;
  }
  if (!bounds.contains(rect.right, rect.top)) {
    blocked.right = true;
    blocked.up = true;
  }
  if (!bounds.contains(rect.right, rect.bottom)) {
    blocked.right = true;
    blocked.down = true;
  }

  blocked.none =
    !blocked.left && !blocked.right && !blocked.up && !blocked.down;
}

document.getElementById('version')
  .textContent = 'Phaser v' + Phaser.VERSION;

var game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  loader: {
    baseURL: 'https://labs.phaser.io',
    crossOrigin: 'anonymous'
  }
});
