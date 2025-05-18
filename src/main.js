import Phaser from 'phaser'
import MenuScene from './scenes/MenuScene.js'
import World1Scene from './scenes/World1Scene.js'
import GameOverScene from './scenes/GameOverScene.js'
import EndScene from './scenes/EndScene.js'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: [MenuScene, World1Scene, GameOverScene, EndScene],
    pixelArt: true
}

new Phaser.Game(config)
