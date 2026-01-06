export default class InputText {
    constructor(scene, x = 400, y = 250) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.targetWord = '';
        this.typed = '';
        this.chars = [];
        this.charSpacing = 18;
    }

    setTargetWord(word) {
        this.targetWord = word;
        this.clear();
    }

    updateTyped(value) {
        this.typed = value;
        this.render();
    }

    clear() {
        this.typed = '';
        this.chars.forEach(char => char.destroy());
        this.chars = [];
    }

    render() {
        this.chars.forEach(char => char.destroy());
        this.chars = [];
        const startX = this.x - (this.targetWord.length * this.charSpacing) / 2;

        for (let i = 0; i < this.typed.length; i++) {
            const typedChar = this.typed[i];
            const targetChar = this.targetWord[i];
            let color = '#ffffff';

            if (targetChar) {
                color = typedChar == targetChar ? '#00ff88' : '#ff5555';
            }

            const charText = this.scene.add.text(
                startX + i * this.charSpacing,
                this.y,
                typedChar,
                {
                    fontSize: '3rem',
                    fontFamily: 'Lacquer',
                    color,
                }
            ).setOrigin(0.5);
            charText.setShadow(0, 0, '#ffee88', 10, true, true)
            this.chars.push(charText);
        }
    }

}