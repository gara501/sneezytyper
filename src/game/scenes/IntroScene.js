import Background from "../ui/Background";
import MusicButton from "../ui/MusicButton";
export default class IntroScene extends Phaser.Scene {
    constructor() {
        super('Intro');
    }

    create() {
        this.background = new Background(this, 'bg-intro');
        this.musicButton = new MusicButton(this);
        this.cameras.main.fadeIn(300, 0, 0, 0);
        const title = this.add.text(400, 450, 'Sneezy Typer!', {
            fontFamily: 'Lacquer',
            fontSize: '7rem',
            color: '#ffffff',
        }).setOrigin(0.5);
        title.setShadow(0, 0, '#ffee88', 10, true, true)

        const enterTo = this.add.text(400, 550, 'Press ENTER to start', {
            fontFamily: 'Lacquer',
            fontSize: '2rem',
            color: '#00ff88',
        }).setOrigin(0.5);
        enterTo.setShadow(0, 0, '#ffee88', 10, true, true)

        const creditsTo = this.add.text(400, 350, 'Press BACKSPACE for Credits', {
            fontFamily: 'Lacquer',
            fontSize: '1rem',
            color: '#00ff88',
        }).setOrigin(0.5);
        creditsTo.setShadow(0, 0, '#ffee88', 10, true, true)

        this.input.keyboard.once('keydown-BACKSPACE', () => {
            this.cameras.main.flash(100, 255, 180, 80);
            this.cameras.main.fadeOut(200, 0, 0, 0);
            this.time.delayedCall(200, () => {
                this.scene.start('Credits');
            });
        })

        this.input.keyboard.once('keydown-ENTER', () => {
            this.cameras.main.flash(100, 80, 255, 180);
            this.cameras.main.fadeOut(200, 0, 0, 0);
            this.time.delayedCall(200, () => {
                this.scene.start('HowToPlay');
            });
        })
    }
}