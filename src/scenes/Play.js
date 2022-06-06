class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('pinkidle', './assets/pink1.png');
        this.load.image('hooves', './assets/hooves.png');
        this.load.image('muffin', './assets/muffin.png');
        this.load.image('cupcake', './assets/cupcake.png');
        this.load.image('special', './assets/specialcake.png');
    }

    create() {

        // add pinkie
        this.pinkie = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'pinkidle').setOrigin(0.5, 0).setDisplaySize(352, 240);
        //add tounge
        // add Spaceships (x3)
        this.muffin = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'muffin', 0, 30).setOrigin(0, 0).setDisplaySize(80, 80);
        this.cupcake = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'cupcake', 0, 20).setOrigin(0,0).setDisplaySize(80, 80);
        this.specialcake = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'special', 0, 10).setOrigin(0,0).setDisplaySize(80, 80);

        // boarders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0x8f9bff).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x8f9bff).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0x8f9bff).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x8f9bff).setOrigin(0 ,0);

        this.add.image(game.config.width/2, game.config.height - borderUISize - borderPadding, 'hooves').setDisplaySize(352, 240);
        // define keys
        

        // initialize score
        this.p1Score = 0;

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);

        // GAME OVER flag
        this.gameOver = false;
    }

    update() {
        this.input.on('pointerdown', function (pointer)
        {
            if(pointer.leftButtonDown())
            {
                lClick = true;
                clickX = pointer.x;
                clickY = pointer.y;
            }
            else
            {
                lClick = false;
            }
        }, this);
        // check key input for restart / menu
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
        }

        if(lClick) {
            this.add.image(clickX, clickY, 'hooves').setDisplaySize(352, 240);
        }

        if(!this.gameOver) {         // update p1
             this.muffin.update();               // update spaceship (x3)
            this.cupcake.update();
            this.specialcake.update();
        }

    }

    checkCollision(tounge, target) {
        // simple AABB checking
        if (tounge.x < target.x + target.width && 
            tounge.x + tounge.width > target.x && 
            tounge.y < target.y + target.height &&
            tounge.height + tounge.y > target. y) {
                return true;
        } else {
            return false;
        }
    }

}