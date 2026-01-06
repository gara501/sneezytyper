export default class InputSystem {
    constructor(scene, { onSubmit, onChange }) {
        this.scene = scene;
        this.input = '';
        this.onSubmit = onSubmit;
        this.onChange = onChange;
        this.enabled = true;

        this.keydownHandler = (e) => {
            if (!this.enabled) return;

            if (e.key === 'Enter') {
                this.submit();
            }
            else if (e.key === 'Backspace') {
                this.input = this.input.slice(0, -1);
                this.onChange?.(this.input);
            }
            else if (e.key.length === 1) {
                this.input += e.key;
                this.onChange?.(this.input);
            }
        };

        scene.input.keyboard.on('keydown', this.keydownHandler);

        scene.events.once('shutdown', this.destroy, this);
        scene.events.once('destroy', this.destroy, this);
    }

    submit() {
        const value = this.input.trim();
        if (!value) return;

        this.enabled = false; // bloquea doble submit
        this.onSubmit?.(value);
    }

    reset() {
        this.input = '';
        this.enabled = true;
        this.onChange?.(this.input);
    }

    destroy() {
        if (!this.scene) return;

        this.scene.input.keyboard.off('keydown', this.keydownHandler);
        this.enterKey?.destroy();
        this.scene = null;
    }
}
