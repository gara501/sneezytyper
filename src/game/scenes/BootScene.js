import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot')
    }

    preload() {
        this.load.audio('sneeze1', '/sounds/jul1.mp3')
        this.load.audio('sneeze2', '/sounds/jul2.mp3')
        this.load.audio('sneeze3', '/sounds/jul3.mp3')
        this.load.audio('sneeze4', '/sounds/jul4.mp3')
        this.load.audio('sneeze5', '/sounds/jul5.mp3')
        this.load.audio('sneeze6', '/sounds/jul6.mp3')
        this.load.audio('correct', '/sounds/correct.mp3')
        this.load.audio('music', '/sounds/music.mp3')

        this.load.image('bg-play', '/bg/room2.png')
        this.load.image('bg-intro', '/bg/bg.png')
        this.load.image('bg-gameover', '/bg/gameover.png')
        this.load.image('bg-credits', '/bg/credits.png')
        this.load.image('j-1', '/images/j1.png')
        this.load.image('j-2', '/images/j2.png')
        this.load.image('s-on', '/images/sound.png')
        this.load.image('s-off', '/images/mute.png')

    }

    create() {
        this.sound.play('music', { loop: true, volume: -0.3 });
        this.scene.start('Intro')
    }
}