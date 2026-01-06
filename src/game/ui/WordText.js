export default class WordText {
    constructor(scene) {
        this.scene = scene;

        this.text = scene.add.text(400, 300, '', {
            fontFamily: 'Lacquer',
            fontSize: '5rem',
            fonstStyle: 'bold',
            color: '#ffffff',
        }).setOrigin(0.5);
        this.startWiggle();

        this.glow = this.text.postFX.addGlow(0x00ff88, 0, 0, false);
        this.startIdleGlow();
    }

    setWord(word) {
        this.text.setText(word);
        this.text.setScale(0.8);
        this.text.setAlpha(0);
        this.scene.tweens.add({
            targets: this.text,
            scale: 1,
            alpha: 1,
            duration: 200,
            ease: 'Back.easeOut',
        })
    }

    playSuccessGlow() {
        this.glow.outerStrength = 0;
        this.scene.tweens.add({
            targets: this.glow,
            outerStrength: 4,
            yoyo: true,
            duration: 200,
            ease: 'Sine.easeOut',
        })
    }

    startIdleGlow() {
        this.scene.tweens.add({
            targets: this.glow,
            outerStrength: { from: 1, to: 2 },
            duration: 800,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
    }

    startWiggle() {
        this.wiggleTween = this.scene.tweens.add({
            targets: this.text,
            x: { from: this.text.x - 2, to: this.text.x + 2 },
            y: { from: this.text.y - 1, to: this.text.y + 1 },
            angle: { from: -1, to: 1 },
            duration: 1200,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        })
    }
}