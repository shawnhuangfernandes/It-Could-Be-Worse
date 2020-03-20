class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
    this.fishPosition = true;
    this.boatBounds;
    this.playerRect;
    this.distance;
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.backgroundMusic = this.sound.add("background-music", {
      volume: 0.4,
      loop: true
    });
    this.backgroundMusic.play();
    this.oceanAmbience = this.sound.add("ocean-waves", {
      volume: 0.4,
      loop: true
    });
    this.oceanAmbience.play();
    this.fishGrab = this.sound.add("fish-grab", { volume: 1 });

    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);

    this.player = new Player(this, 117, 123, "player", 0);

    this.debug = this.add.graphics({ lineStyle: { color: 0xffff00 } });

    this.fish = new Fish(this, 572, 387, "fish", 0, this.player);

    this.fishPosition = false;

    this.physics.add.overlap(this.player, this.fish, (player, fish) => {
      if (!!this.fishPosition) {
        this.fish.x = 117;
        this.fish.y = 140;
      } else {
        this.fish.x = 572;
        this.fish.y = 379;
      }

      this.fishPosition = !this.fishPosition;
      this.fishGrab.play();
    });
   
    this.foreground = this.add.image(0, 0, "foreground");
    this.foreground.setOrigin(0, 0);

    var data = [
      80,
      109,
      254,
      127,
      425,
      180,
      560,
      250,
      674,
      336,
      550,
      513,
      325,
      410,
      145,
      283,
      100,
      195,
      80,
      109
    ];

    

    this.boatBounds = new Phaser.Geom.Polygon(data);
    this.playerRect = new Phaser.Geom.Rectangle();
    this.distance = new Phaser.Math.Vector2();
  }

  update() {
    console.log(game.input.mousePointer.x, game.input.mousePointer.y);

    this.player.update(this.cursors);

    var body = this.player.body;

    this.projectRect(this.playerRect, body, 1 / this.physics.world.fps);
    this.setBlocked(body.blocked, this.playerRect, this.boatBounds);
    this.clampVelocity(body.velocity, body.blocked);

    this.debug
      .clear()
      .strokePoints(this.boatBounds.points)
      .strokeRectShape(this.playerRect);
  }

  projectRect(rect, body, time) {
    this.distance.copy(body.velocity).scale(time);
    Phaser.Geom.Rectangle.CopyFrom(body, rect);
    Phaser.Geom.Rectangle.OffsetPoint(rect, this.distance);
  }

  clampVelocity(velocity, blocked) {
    let Clamp = Phaser.Math.Clamp;
    if (blocked.left) velocity.x = Clamp(velocity.x, 0, Infinity);
    if (blocked.right) velocity.x = Clamp(velocity.x, 0, -Infinity);
    if (blocked.up) velocity.y = Clamp(velocity.y, 0, Infinity);
    if (blocked.down) velocity.y = Clamp(velocity.y, 0, -Infinity);
  }

  setBlocked(blocked, rect, bounds) {
    if (!bounds.contains(rect.left, rect.top)) {
      blocked.left = true;
      blocked.up = true;
    }
    if (!bounds.contains(rect.left, rect.bottom)) {
      blocked.left = true;
      blocked.down = true;
    }
    if (!bounds.contains(rect.right, rect.top)) {
      blocked.right = true;
      blocked.up = true;
    }
    if (!bounds.contains(rect.right, rect.bottom)) {
      blocked.right = true;
      blocked.down = true;
    }

    blocked.none =
      !blocked.left && !blocked.right && !blocked.up && !blocked.down;
  }
}
