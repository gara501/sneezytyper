export default class LifeBar {
    constructor(scene, x = 300, y = 50, width = 300, height = 20) {
        this.scene = scene;
        this.maxValue = 100;
        this.value = 150;
        this.width = width;
        this.height = height;

        this.bg = scene.add.rectangle(x, y, width, height, 0x222222).setOrigin(0, 0.5);
        this.bar = scene.add.rectangle(x - width / 2, y, width * (this.value / this.maxValue), height, 0x00ff88)
            .setOrigin(0, 0.5);
    }

    setValue(value) {
        this.value = Phaser.Math.Clamp(value, 0, this.maxValue);
        // this.bar.width = this.width * (this.value / this.maxValue);
        this.scene.tweens.add({
            targets: this.bar,
            width: this.width * (this.value / this.maxValue),
            duration: 200,
            ease: 'Sine.easeOut'
        })

        if (this.value <= 25) {
            this.bar.fillColor = 0xff5555;
        } else {
            this.bar.fillColor = 0x00ff88;
        }
    }

    increase(amount) {
        if (this.value + amount < this.maxValue) {
            this.setValue(this.value + amount);
        }
    }

    decrease(amount) {
        this.setValue(this.value - amount);
    }
}