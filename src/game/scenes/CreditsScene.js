import Background from "../ui/Background";
import MusicButton from "../ui/MusicButton";

export default class CreditsScene extends Phaser.Scene {
    constructor() {
        super('Credits');
    }

    create() {
        this.background = new Background(this, 'bg-credits');
        this.musicButton = new MusicButton(this);
        this.cameras.main.fadeIn(300, 0, 0, 0);

        this.add.text(400, 400, 'Juleja: Sneeze Sounds Author', {
            fontFamily: 'Lacquer',
            fontSize: '2rem',
            color: '#00ff88',
        }).setOrigin(0.5);

        this.add.text(400, 450, 'Gonzalo Ramirez: Game Developer', {
            fontFamily: 'Lacquer',
            fontSize: '1.5rem',
            color: '#ffffff',
        }).setOrigin(0.5);

        this.add.text(400, 500, 'Press ENTER to Restart', {
            fontFamily: 'Lacquer',
            fontSize: '3rem',
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