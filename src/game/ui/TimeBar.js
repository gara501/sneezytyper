export default class TimeBar {
    constructor(scene, x, y, width, height = 12) {
        this.scene = scene;
        this.width = width;
        this.height = height
        this.bg = scene.add.rectangle(x, y, width, height, 0x222222).setOrigin(0.5);

        this.bar = scene.add.rectangle(x - width / 2, y, width, height, 0x00aaff).setOrigin(0, 0.5);
        this.defaultColor = 0x00aaff;
        this.warningColor = 0xff4444;
    }

    setProgress(progress) {
        const clamped = Phaser.Math.Clamp(progress, 0, 1);
        this.bar.width = this.width * clamped;

        if (clamped <= 0.3) {
            this.bar.fillColor = this.warningColor;
        } else {
            this.bar.fillColor = this.defaultColor;
        }
    }

    resetAnimated(duration = 300) {
        this.bar.fillColor = this.defaultColor;
        this.scene.tweens.add({
            targets: this.bar,
            width: this.width,
            duration,
            ease: 'Cubic.easeOut'
        })
    }

    reset() {
        this.bar.width = this.width;
    }
}