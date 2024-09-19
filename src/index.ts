import Phaser from "phaser";
import { scenes } from "./scenes";
import { Game, Types } from "phaser";
import "./style.scss";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  backgroundColor: "#000",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 300 },
      debug: false,
    },
  },
  scene: scenes,
};

export default new Game(config);
