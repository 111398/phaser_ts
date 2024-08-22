import Phaser from "phaser";
import { scenes } from "./scenes";
import "./style.scss";

new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  title: "main Game",
  url: "",
  version: "0.0.1",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200, x: 0 },
    },
  },
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: scenes,
});
