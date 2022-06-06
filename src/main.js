let config = {
    type: Phaser.CANVAS,
    width: 1000,
    height: 500,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;


let lClick;
