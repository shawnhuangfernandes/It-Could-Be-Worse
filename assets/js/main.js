let game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene, TitleScene, GameScene, UiScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: {
        y: 0
      }
    }
  }
});