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
    this.load.image("title-background", "assets/images/title-background.png");
    this.load.image("play-pressed", "assets/images/play-pressed.png");
    this.load.image("play-unpressed", "assets/images/play-unpressed.png");
    this.load.image("ui-overlay", "assets/images/ui-overlay.png");
  }

  create() {
    this.scene.start("Game");
  }
}
