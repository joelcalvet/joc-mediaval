class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        this.load.image('fonsMenu', 'images/ambiente-etereo-con-grandes-ventanas.jpg');
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fonsMenu')
            .setOrigin(0.5)
            .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        // Títol
        this.add.text(this.cameras.main.centerX, 120, 'Joc Medieval', {
            fontFamily: 'OldLondon, serif',
            fontSize: '72px',
            color: '#f0d060',
            stroke: '#000000',
            strokeThickness: 8,
            shadow: {
                offsetX: 4,
                offsetY: 4,
                color: '#000000',
                blur: 6,
                stroke: true,
                fill: true
            }
        }).setOrigin(0.5);

        // Instrucció
        this.add.text(this.cameras.main.centerX, 260, 'Prem ESPAI per començar', {
            fontFamily: 'OldLondon, serif',
            fontSize: '32px',
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Escoltar tecla espai
        this.input.keyboard.on('keydown-SPACE', () => {
            this.sound.stopAll(); // Atura música
            this.scene.start('Mon1Scene');
        });
    }
}
