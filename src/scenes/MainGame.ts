import { Scene } from "phaser";

export class MainGame extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;
  new_text: Phaser.GameObjects.Text;

  constructor() {
    super("MainGame");
  }
  preload() {
    this.load.image("vlastelin", "public/vlastelin.jpeg");
  }
  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.background = this.add.image(width * 0.5, height * 0.5, "vlastelin");
    this.background.setAlpha(1);

    this.msg_text = this.add
      .text(width * 0.5, height * 0.5, "hello", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#000",
        stroke: "#ffff",
        strokeThickness: 5,
        align: "center",
      })
      .setOrigin(0.0);

    this.new_text = this.add.text(width * 0.54, height * 0.6, "click me", {
      fontFamily: "Arial Black",
      fontSize: 38,
      color: "#000",
      stroke: "#ffff",
      strokeThickness: 5,
      align: "center",
    });

    this.input.once("pointerdown", () => {
      this.scene.start("NextPage");
    });
  }
}
