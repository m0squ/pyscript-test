var Sprite = new Phaser.Class(
{
    Extends: Phaser.GameObjects.Sprite,

    initialize: function Sprite(scene, img, x = 0, y = 0)
    {
        this.scene = scene
        this.repeat = -1
        this.frameRate = 10
        this.frames = null
        player = this.scene.physics.add.sprite(x, y, img.id)
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
    }
})