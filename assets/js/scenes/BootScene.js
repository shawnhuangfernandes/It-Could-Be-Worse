class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.audio("background-music", ["assets/audio/background-music.mp3"]);
    this.load.audio("fish-grab", ["assets/audio/fish-grab.mp3"]);
    this.load.audio("ocean-waves", ["assets/audio/ocean-waves.mp3"]);
    this.load.image("background", "assets/images/background.png");
    this.load.image("foreground", "assets/images/foreground.png");
    this.load.image("blowfish", "assets/images/blowfish.png");
    this.load.image("fish", "assets/images/fish.png");
    this.load.image("player", "assets/images/player.png");
    this.load.image("unicornfish", "assets/images/unicornfish.png");
    this.load.image("piranha", "assets/images/piranha.png");
  }

  create() {
    this.scene.start("Game");
  }
}
