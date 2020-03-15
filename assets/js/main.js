let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.audio("background-music", ["assets/audio/background-music.mp3"]);
  this.load.image("background", "assets/images/background.png");
  this.load.image("blowfish", "assets/images/blowfish.png");
  this.load.image("fish", "assets/images/fish.png");
  this.load.image("player", "assets/images/player.png");
  this.load.image("unicornfish", "assets/images/unicornfish.png");
  this.load.image("piranha", "assets/images/piranha.png");
}

function create() {
  // setup user keyboard input handler
  this.cursors = this.input.keyboard.createCursorKeys();

  // setup the background
  this.background = this.add.sprite(0, 0, "background");
  this.background.setOrigin(0, 0);

  // put the player
  this.player = this.physics.add.image(180, 180, "player");
  this.player.body.setCircle(20, 20, 140);
  this.player.setScale(0.5);
  this.player.body.setCollideWorldBounds(true);

  // create a custom polygon collider
  var data = [
    80,
    109,
    254,
    127,
    425,
    180,
    560,
    250,
    674,
    336,
    550,
    513,
    325,
    410,
    145,
    283,
    100,
    195,
    80,
    109
  ];

  var boatBounds = this.add.polygon(0, 0, data, 0x6666ff, 0.5);
  boatBounds.setOrigin(0,0);
}

function update() {
  console.log(game.input.mousePointer.x, game.input.mousePointer.y);
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
}
