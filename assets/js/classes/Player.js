class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene;
        this.velocity = 160

        // enable physics
        this.scene.physics.world.enable(this);
        // set immovable
        this.setImmovable(false);
        // set scale
        this.setScale(0.5);
        // set circle
        this.body.setCircle(30, 10, 100);
        // set world collision
        this.body.setCollideWorldBounds(true);

        // add player to existing scene
        this.scene.add.existing(this);
    }

    update(cursors) {
        this.body.setVelocity(0);
    
        if (cursors.left.isDown) {
          this.body.setVelocityX(-this.velocity);
        } else if (cursors.right.isDown) {
          this.body.setVelocityX(this.velocity);
        }
    
        if (cursors.up.isDown) {
          this.body.setVelocityY(-this.velocity);
        } else if (cursors.down.isDown) {
          this.body.setVelocityY(this.velocity);
        }
      }
}