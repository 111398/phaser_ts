import { Scene } from "phaser";

export class NextPage extends Scene {
  background: Phaser.GameObjects.Image;

  constructor() {
    super("NextPage");
  }

  preload() {
    this.load.image("billi", "assets/billi.jpeg");
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.background = this.add.image(width * 0.5, height * 0.5, "billi");
    this.background.setAlpha(1);

    this.input.once("pointerdown", () => {
      this.scene.start("MainGame");
    });
  }
}
