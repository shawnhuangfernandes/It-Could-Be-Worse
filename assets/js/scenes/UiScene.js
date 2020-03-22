class UiScene extends Phaser.Scene {
  constructor() {
    super("Ui");
  }

  init() {
    this.gameScene = this.scene.get('Game');
  }

  create() {
    this.setupUiElements();
    this.setupEvents();
  }

  setupUiElements() {
    this.UiFrame = this.add.image(0, 0, "ui-overlay");
    this.UiFrame.setOrigin(0, 0);
    this.fishScore = this.add.text(755, 240, "0", {
      fontSize: "30px",
      fill: "white",
      align: "center",
    });
    this.livesLeft = this.add.text(755, 385, "5", {
      fontSize: "30px",
      fill: "white",
      align: "center",
    });
  }

  setupEvents() {
    this.gameScene.events.on('updateScore', () => {
      this.fishScore.setText(parseInt(this.fishScore.text) + 1)
    })
  }
}
