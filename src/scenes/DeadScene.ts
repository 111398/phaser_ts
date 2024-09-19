import { Scene } from "phaser";

export class DeadScene extends Scene {
  background: Phaser.GameObjects.Image;

  backButton: Phaser.GameObjects.Text;

  constructor() {
    super("dead");
  }

  preload() {
    this.load.image("vlastelin", "assets/vlastelin.jpeg");
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.background = this.add.image(width * 0.5, height * 0.5, "vlastelin");

    this.background.setAlpha(1);

    this.backButton = this.add
      .text(width * 0.5, height * 0.5, "потрачено", {
        fontSize: "112px",
        color: "red",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        fontStyle: "bold",
      })
      .setOrigin(0.5, 0.5)
      .setInteractive();

    this.backButton.on("pointerup", () => {
      this.scene.start("game");
    });
    this.backButton.on("pointerover", () => {
      this.backButton.setStyle({ fill: "#000" });
    });
    this.backButton.on("pointerout", () => {
      this.backButton.setStyle({ fill: "red" });
    });
  }
}
