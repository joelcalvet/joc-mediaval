export default class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene')
    }

    create() {
        this.add.text(250, 200, 'Cavaller dels Mons', { fontSize: '32px', fill: '#fff' })
        const startText = this.add.text(300, 300, 'Comença el viatge', { fontSize: '24px', fill: '#0f0' })
        startText.setInteractive()
        startText.on('pointerdown', () => {
            this.scene.start('World1Scene')
        })
    }
}
