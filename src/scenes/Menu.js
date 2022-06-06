class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Click 2 Start', menuConfig).setOrigin(0.5);

        
        this.input.on('pointerdown', function (pointer)
        {
            if(pointer.leftButtonDown())
            {
              game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000    
              }
                this.sound.play('sfx_select');
                this.scene.start('playScene');
            }
        }, this);
    }

    update() {

      }
}