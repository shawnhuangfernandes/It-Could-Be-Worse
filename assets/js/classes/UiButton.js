class UiButton extends Phaser.GameObjects.Image {
 
    constructor(scene, x, y, staticImg, hoverImg, onClickCallback) {
      super(scene, x, y, staticImg);
      this.scene = scene;
      this.x = x;
      this.y = y;
      this.staticImg = staticImg;
      this.hoverImg = hoverImg;
      this.onClickCallback = onClickCallback;

      this.setScale();

      this.setInteractive();

      this.on("pointerdown", () => {
        this.onClickCallback()
      });

      this.on("pointerover", () => {
        this.setTexture(this.hoverImg);
      });

      this.on("pointerout", () => {
        this.setTexture(this.staticImg);
      });

      this.scene.add.existing(this);
    }
}
