import Background from "../ui/Background";
import MusicButton from "../ui/MusicButton";

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    init(data) {
        this.finalScore = data.score ?? 0;
    }

    create() {
        this.background = new Background(this, 'bg-gameover');
        this.musicButton = new MusicButton(this);
        this.cameras.main.fadeIn(300, 0, 0, 0);
        this.add.text(400, 100, 'Game Over', {
            fontFamily: 'Lacquer',
            fontSize: '7rem',
            color: '#ff5555',
        }).setOrigin(0.5);

        this.add.text(400, 250, `Score: ${this.finalScore}`, {
            fontFamily: 'Lacquer',
            fontSize: '3rem',
            color: '#ffffff',
        }).setOrigin(0.5);

        this.add.text(400, 420, 'Press ENTER to Restart', {
            fontFamily: 'Lacquer',
            fontSize: '2rem',
            color: '#00ff88',
        }).setOrigin(0.5);

        this.input.keyboard.once('keydown-ENTER', () => {
            this.cameras.main.fadeOut(200, 0, 0, 0);
            this.time.delayedCall(200, () => {
                this.scene.start('Intro');
            });
        })
    }
}