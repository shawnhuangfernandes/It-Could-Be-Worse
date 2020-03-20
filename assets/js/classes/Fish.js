class Fish extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame, target) {
    super(scene, x, y, key, frame);
    this.scene = scene;

    // enable physics
    this.scene.physics.world.enable(this);
    // set immovable
    this.setImmovable(false);
    // set collider circle
    this.body.setCircle(90, 40, 70);
    // set collider scale
    this.setScale(0.2);
    // set world collision
    this.body.setCollideWorldBounds(true);
    // adding player as the target
    this.target = target;
    // add player to existing scene
    this.scene.add.existing(this);


  }
}
