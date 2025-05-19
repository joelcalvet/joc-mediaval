class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        this.load.image('fonsMenu', 'public/images/ambiente-etereo-con-grandes-ventanas.jpg');
        this.load.font('medievalFont', 'fonts/OldLondon.ttf'); // si tens font externa
    }

    create() {
        // Posar el fons centrat i que cobreixi la pantalla
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fonsMenu')
            .setOrigin(0.5)
            .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        // Text amb tipografia
        this.titleText = this.add.text(this.cameras.main.centerX, 100, 'Joc Medieval', {
            fontFamily: 'MedievalFont, serif',
            fontSize: '64px',
            color: '#f0d060',
            stroke: '#000000',
            strokeThickness: 6,
            shadow: { offsetX: 2, offsetY: 2, color: '#333', blur: 3, stroke: true, fill: true }
        }).setOrigin(0.5);

        // Més elements del menú...
    }
}
