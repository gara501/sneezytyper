import Phaser from 'phaser'
import { gameConfig } from './config'
import BootScene from './scenes/BootScene'
import PlayScene from './scenes/PlayScene'
import GameOverScene from './scenes/GameOverScene'
import HowToPlayScene from './scenes/HowToPlayScene'
import IntroScene from './scenes/IntroScene'
import CreditsScene from './scenes/CreditsScene'

gameConfig.scene = [BootScene, IntroScene, HowToPlayScene, PlayScene, GameOverScene, CreditsScene];

export default new Phaser.Game(gameConfig);