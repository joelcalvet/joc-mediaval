export default class World1Scene extends Phaser.Scene {
    constructor() {
        super('World1Scene')
    }

    create() {
        this.add.text(100, 100, 'Benvingut al Món 1 - Bosc Encantat', { fontSize: '20px', fill: '#fff' })
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('EndScene')
        })
    }
}
