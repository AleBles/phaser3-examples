var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var image;

function preload() {

    this.load.image('eye', 'assets/sprites/spikedball.png');

}

function create() {

    image = this.add.image(300, 300, 'eye');
    image.setScale(10.0);
    console.log(image.angle, image.rotation);

    this.input.keyboard.addKeyCapture(32);

    this.input.keyboard.on('keyup_SPACE', function () {

        // image.angle += 45;
        // image.angle -= 45;

        image.rotation -= 0.785;

        console.log(image.angle, image.rotation);

    });

}

function update() {

    image.rotation -= 0.01;

}