export default class EndScene extends Phaser.Scene {
    constructor() {
        super('EndScene')
    }

    create() {
        this.add.text(250, 250, 'Has completat el món!', { fontSize: '28px', fill: '#0f0' })
        const menuText = this.add.text(280, 320, 'Torna al menú', { fontSize: '24px', fill: '#fff' })
        menuText.setInteractive()
        menuText.on('pointerdown', () => {
            this.scene.start('MenuScene')
        })
    }
}
