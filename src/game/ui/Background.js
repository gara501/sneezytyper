export default class Background {
    constructor(scene, key) {
        const { width, height } = scene.scale;
        this.image = scene.add.image(width / 2, height / 2, key).setOrigin(0.5).setDepth(-10);
        const scale = Math.max(
            width / this.image.width,
            height / this.image.height
        )

        this.image.setScale(scale);
        this.image.setAlpha(0.65);
    }
}