export default class MusicButton {
    constructor(scene) {
        this.scene = scene;

        // Get or initialize global music state
        if (scene.game.registry.get('musicEnabled') === undefined) {
            scene.game.registry.set('musicEnabled', true);
        }

        this.musicEnabled = scene.game.registry.get('musicEnabled');

        // Create button image instead of text
        this.button = scene.add.image(750, 30, this.getImageKey());
        this.button.setOrigin(0.5);
        this.button.setScale(0.1); // Adjust scale as needed
        this.button.setInteractive({ useHandCursor: true });

        // Add click handler
        this.button.on('pointerdown', () => this.toggle());

        // Add hover effect
        this.button.on('pointerover', () => {
            this.button.setScale(0.1);
        });

        this.button.on('pointerout', () => {
            this.button.setScale(0.1);
        });
    }

    getImageKey() {
        return this.musicEnabled ? 's-on' : 's-off';
    }

    toggle() {
        this.musicEnabled = !this.musicEnabled;
        this.scene.game.registry.set('musicEnabled', this.musicEnabled);

        // Update button image
        this.button.setTexture(this.getImageKey());

        // Toggle music
        const music = this.scene.sound.get('music');
        if (music) {
            if (this.musicEnabled) {
                music.resume();
            } else {
                music.pause();
            }
        }
    }
}
