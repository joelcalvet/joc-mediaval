export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene')
    }

    create() {
        this.add.text(250, 250, 'Has mort! Torna a provar!', { fontSize: '28px', fill: '#f00' })
        const restartText = this.add.text(280, 320, 'Torna al inici', { fontSize: '24px', fill: '#0f0' })
        restartText.setInteractive()
        restartText.on('pointerdown', () => {
            this.scene.start('MenuScene')
        })
    }
}
