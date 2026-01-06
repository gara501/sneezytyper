import Background from "../ui/Background";
import MusicButton from "../ui/MusicButton";

export default class HowToPlayScene extends Phaser.Scene {
    constructor() {
        super('HowToPlay');
    }

    create() {
        this.background = new Background(this, 'bg-play');
        this.musicButton = new MusicButton(this);

        this.cameras.main.fadeIn(300, 0, 0, 0);
        const instructions = [
            'Type the word before time runs out',
            'Correct words fill your life bar',
            'Mistakes reduce life',
            'Combos give bonus',
            'Remember, you need a Keyboard to play',
            '',
            'Press ENTER to Play'
        ];

        const titleText = this.add.text(400, 140, 'How to Play', {
            fontFamily: 'Lacquer',
            fontSize: '3.5rem',
            color: '#ffffff',
        }).setOrigin(0.5);
        titleText.setShadow(0, 0, '#ffee88', 10, true, true)
        this.startWiggle(titleText);

        const instructionsText = this.add.text(400, 350, instructions.join('\n'), {
            fontSize: '2rem',
            fontFamily: 'Lacquer',
            align: 'center',
            color: '#ffffff',
            lineSpacing: 8
        }).setOrigin(0.5);
        instructionsText.setShadow(0, 0, '#ffee88', 10, true, true)
        this.startWiggle(instructionsText);

        this.input.keyboard.once('keydown-ENTER', () => {
            this.cameras.main.fadeOut(200, 0, 0, 0);
            this.time.delayedCall(200, () => {
                this.scene.start('Play');
            });
        })
    }

    startWiggle(textToWiggle) {
        this.wiggleTween = this.tweens.add({
            targets: textToWiggle,
            x: { from: textToWiggle.x - 0.9, to: textToWiggle.x + 0.9 },
            y: { from: textToWiggle.y - 0.9, to: textToWiggle.y + 0.9 },
            angle: { from: -0.7, to: 1 },
            duration: 500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        })
    }
}