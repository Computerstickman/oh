class Tounge extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing status
        this.moveSpeed = 2;         // pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket')  // add rocket sfx
        this.clickX = 0;
        this.clickY = 0;
    }

    update() {

        if(Phaser.Input.Pointer.leftButtonDown() && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
            this.clickX = Phaser.Input.Pointer.x;
            this.clickY = Phaser.Input.Pointer.y;

        }
        // if fired, move to click position
        if(this.isFiring && this.y >= clickY * 3 + borderPadding) {
            
        }
        // reset on miss
        if(this.y = clickY) {
            this.reset();
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}