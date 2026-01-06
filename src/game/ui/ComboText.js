export default class ComboText {
    constructor(scene) {
        this.scene = scene;
        this.text = scene.add.text(400, 130, '', {
            fontFamily: 'Lacquer',
            fontSize: '2rem',
            color: '#ffaa00',
        }).setOrigin(0.5);
    }

    setCombo(value) {
        if (!this.scene || !this.text) return;

        const combo = Number(value) || 0;

        if (combo <= 0) {
            this.text.setAlpha(0);
            this.text.setText('');
            return;
        }
        this.text.setAlpha(1);
        this.text.setScale(0.8);
        this.text.setText(`Combo x${combo}`);

        this.scene.tweens.add({
            targets: this.text,
            scale: { from: 1.4, to: 1 },
            duration: 150,
            ease: 'Back.easeOut'
        })
    }
}