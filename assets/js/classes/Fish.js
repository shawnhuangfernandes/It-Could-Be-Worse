class Fish extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame, target) {
    super(scene, x, y, key, frame);
    this.scene = scene;
    this.fishPosition = true;

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

    this.scene.physics.add.overlap(this.target, this.fish, (target, this) => {
        if (!!this.fishPosition) {
          this.x = 117;
          this.y = 140;
        } else {
          this.x = 572;
          this.y = 379;
        }
  
        this.fishPosition = !this.fishPosition;
        this.fishGrab.play();
      });
  }
}
