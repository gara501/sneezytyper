export default class LevelSystem {
    constructor() {
        this.level = 1;
        this.wordsCompleted = 0;
        this.wordsPerLevel = 5;
    }

    nextLevel() {
        this.wordsCompleted++;
        if (this.wordsCompleted % this.wordsPerLevel === 0) {
            this.level++;
        }
    }

    getTimeLimit(word) {
        const length = word ? word.length : 5;
        // Base time per character: 600ms
        // Reduce slightly as level increases (min 300ms per char)
        const timePerChar = Math.max(300, 200 - (this.level * 20));

        // Minimum 2 seconds total, or length * timePerChar
        return Math.max(2000, length * timePerChar);
    }
}