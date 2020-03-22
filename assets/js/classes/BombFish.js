class BombFish extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame);

    this.scene.add.existing(this);
  }
}
