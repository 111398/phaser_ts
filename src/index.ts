import Phaser from "phaser";
import { scenes } from "./scenes";
import { Game, Types } from "phaser";
import "./style.scss";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: "100%",
  height: "100%",
  parent: "game-container",
  backgroundColor: "#000",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: scenes,
};

export default new Game(config);
