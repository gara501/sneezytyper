export default class ComboSystem {
    constructor() {
        this.combo = 0
    }

    success() {
        this.combo++;
        return this.getBonus();
    }

    fail() {
        this.combo = 0;
    }

    getBonus() {
        return Math.min(this.combo * 10, 50);
    }

    getCombo() {
        return this.combo;
    }
}