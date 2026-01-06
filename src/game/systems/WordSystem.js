import { WORDS } from '../data/words'

export default class WordSystem {
    constructor() {
        this.easy = WORDS.filter(w => w.length <= 6);
        this.medium = WORDS.filter(w => w.length > 6 && w.length <= 10);
        this.hard = WORDS.filter(w => w.length > 10);
    }

    getRandomWord(level = 1) {
        let pool = this.easy;

        if (level >= 4 && level <= 6) {
            pool = this.medium;
        } else if (level > 6) {
            pool = this.hard;
        }

        // Fallback if pool is empty (though unlikely with standard dictionary)
        if (pool.length === 0) pool = this.easy;

        return pool[Math.floor(Math.random() * pool.length)];
    }
}