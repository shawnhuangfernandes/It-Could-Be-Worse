class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  create() {
    this.background = this.add.image(0, 0, "title-background");
    this.background.setOrigin(0, 0);

    // this.startButton = new UiButton(
    //   this,
    //   300,
    //   300,
    //   "play-unpressed",
    //   "play-pressed",
    //     this.startScene.bind(this, "Game")
    // )

    this.button = this.add.image(360, 480, "play-unpressed");

    this.button.setInteractive();

    this.button.on("pointerdown", () => {
      this.startScene("Game");
    });

    this.button.on("pointerover", () => {
      this.button.setTexture("play-pressed");
    });

    this.button.on("pointerout", () => {
      this.button.setTexture("play-unpressed");
    });
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}
