import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot')
    }

    preload() {
        this.load.audio('sneeze1', `${import.meta.env.BASE_URL}sounds/jul1.mp3`)
        this.load.audio('sneeze2', `${import.meta.env.BASE_URL}sounds/jul2.mp3`)
        this.load.audio('sneeze3', `${import.meta.env.BASE_URL}sounds/jul3.mp3`)
        this.load.audio('sneeze4', `${import.meta.env.BASE_URL}sounds/jul4.mp3`)
        this.load.audio('sneeze5', `${import.meta.env.BASE_URL}sounds/jul5.mp3`)
        this.load.audio('sneeze6', `${import.meta.env.BASE_URL}sounds/jul6.mp3`)
        this.load.audio('correct', `${import.meta.env.BASE_URL}sounds/correct.mp3`)
        this.load.audio('music', `${import.meta.env.BASE_URL}sounds/music.mp3`)

        this.load.image('bg-play', `${import.meta.env.BASE_URL}bg/room2.png`)
        this.load.image('bg-intro', `${import.meta.env.BASE_URL}bg/bg.png`)
        this.load.image('bg-gameover', `${import.meta.env.BASE_URL}bg/gameover.png`)
        this.load.image('bg-credits', `${import.meta.env.BASE_URL}bg/credits.png`)
        this.load.image('j-1', `${import.meta.env.BASE_URL}images/j1.png`)
        this.load.image('j-2', `${import.meta.env.BASE_URL}images/j2.png`)
        this.load.image('s-on', `${import.meta.env.BASE_URL}images/sound.png`)
        this.load.image('s-off', `${import.meta.env.BASE_URL}images/mute.png`)

    }

    create() {
        this.sound.play('music', { loop: true, volume: -0.3 });
        this.scene.start('Intro')
    }
}