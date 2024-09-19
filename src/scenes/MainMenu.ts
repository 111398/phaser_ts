import { Scene } from "phaser";

export class MainMenu extends Scene {
  background: Phaser.GameObjects.Image;

  playButton: Phaser.GameObjects.Text;

  constructor() {
    super("MainMenu");
  }

  preload() {
    this.load.image("sky", "assets/sky.png");
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.background = this.add.image(width * 0.5, height * 0.5, "sky");
    this.background.setAlpha(1);

    this.playButton = this.add
      .text(width * 0.5, height * 0.5, "Play", {
        fontSize: "112px",
        color: "#8805a8",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        fontStyle: "bold",
      })
      .setOrigin(0.5, 0.5)
      .setInteractive();

    this.playButton.on("pointerup", () => {
      //имя сцены из super в сцене MainGame
      this.scene.start("game");
    });
    this.playButton.on("pointerover", () => {
      this.playButton.setStyle({ fill: "#f39c12" });
    });
    this.playButton.on("pointerout", () => {
      this.playButton.setStyle({ fill: "#000" });
    });
  }
}
