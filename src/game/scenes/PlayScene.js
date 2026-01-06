import Phaser from "phaser";
import WordSystem from "../systems/WordSystem";
import LevelSystem from "../systems/LevelSystem";
import InputSystem from "../systems/InputSystem";
import WordText from "../ui/WordText";
import LifeBar from "../ui/LifeBar";
import TimeBar from "../ui/TimeBar";
import ComboSystem from "../systems/ComboSystem";
import ComboText from "../ui/ComboText";
import InputText from "../ui/InputText";
import Background from "../ui/Background";
import MusicButton from "../ui/MusicButton";

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super('Play');
    }

    create() {
        this.sneezeSounds = [
            'sneeze1',
            'sneeze2',
            'sneeze3',
            'sneeze4',
            'sneeze5',
            'sneeze6'
        ];
        this.cameras.main.fadeIn(300, 0, 0, 0);
        this.wordSystem = new WordSystem()
        this.levelSystem = new LevelSystem()
        this.wordText = new WordText(this)
        this.lifeBar = new LifeBar(this)
        this.timeBar = new TimeBar(this, 400, 90, 300)
        this.comboSystem = new ComboSystem()
        this.comboText = new ComboText(this)

        this.currentWord = '';
        this.timer = null;
        this.inputText = new InputText(this)
        this.inputSystem = new InputSystem(this, {
            onSubmit: (text) => this.checkWord(text),
            onChange: (text) => this.inputText.updateTyped(text)
        })

        this.background = new Background(this, 'bg-play');
        this.musicButton = new MusicButton(this);

        // Add character image on the right side
        this.characterImage = this.add.image(650, 500, 'j-1');
        this.characterImage.setScale(1.2); // Adjust scale as needed
        this.characterImage.setDepth(1);

        this.startRound();
    }

    startRound() {
        this.currentWord = this.wordSystem.getRandomWord(this.levelSystem.level)
        this.wordText.setWord(this.currentWord);

        this.inputText.setTargetWord(this.currentWord);
        this.inputSystem.reset();

        if (this.timer) {
            this.timer.remove();
        }

        this.roundDuration = this.levelSystem.getTimeLimit(this.currentWord);
        this.roundStartTime = null; // Stop update loop

        this.timeBar.resetAnimated();

        this.time.delayedCall(300, () => {
            this.roundStartTime = this.time.now;
            this.timer = this.time.delayedCall(
                this.roundDuration, () => this.fail()
            );
        });
    }

    checkWord(input) {
        if (input === this.currentWord) {
            const bonus = this.comboSystem.success();
            this.wordText.playSuccessGlow();

            this.levelSystem.nextLevel();
            this.lifeBar.increase(bonus + 10);
            this.comboText.setCombo(this.comboSystem.getCombo());

            this.sound.play('correct');
            this.startRound()
        } else {
            this.fail();
        }
    }

    playRandomSneeze() {
        const key = Phaser.Utils.Array.GetRandom(this.sneezeSounds);
        this.sound.play(key);
    }

    fail() {
        this.comboSystem.fail();
        this.comboText.setCombo(0);
        this.lifeBar.decrease(40);

        this.cameras.main.shake(200, 0.015);
        this.cameras.main.flash(120, 255, 50, 50);

        this.wordText.text.setTint(0xff5555);

        // Change character image to j-2
        this.characterImage.setTexture('j-2');

        this.time.delayedCall(100, () => {
            this.wordText.text.clearTint();
        })

        // Return to j-1 after 0.5 seconds
        this.time.delayedCall(500, () => {
            this.characterImage.setTexture('j-1');
        });

        this.playRandomSneeze();

        if (this.lifeBar.value <= 0) {
            this.scene.start('GameOver', { score: this.levelSystem.wordsCompleted });
            return;
        }
        this.startRound();
    }

    success() {
        this.inputSystem.reset();
    }

    update() {
        if (!this.roundStartTime) return;

        const elapsed = this.time.now - this.roundStartTime;
        const progress = 1 - elapsed / this.roundDuration;
        this.timeBar.setProgress(progress);
    }
}