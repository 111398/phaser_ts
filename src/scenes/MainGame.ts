import { Scene } from "phaser";

export class MainGame extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;

  constructor() {
    super("Game");
  }
  preload() {
    this.load.image("vlastelin", "public/vlastelin.jpeg");
  }
  create() {
    const width = this.scale.width;
    const height = this.scale.height;
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor("#0000");

    this.background = this.add.image(width * 0.5, height * 0.5, "vlastelin");
    this.background.setAlpha(1);

    this.msg_text = this.add.text(
      50,
      50,
      "Make something fun!\nand share it with us:\nsupport@phaser.io",
      {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#000",
        stroke: "#ffff",
        strokeThickness: 5,
        align: "center",
      }
    );
    this.msg_text.setOrigin(0);

    // this.input.once("pointerdown", () => {
    //   this.scene.start("GameOver");
    // });
  }
}
