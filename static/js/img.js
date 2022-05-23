imgN = 0
var Img = new Phaser.Class(
{
    Extends: Phaser.GameObjects.Image,

    initialize: function Img(scene, path)
    {
        this.scene = scene
        this.path = path
        this.id = String(imgN)
        this.scale = 1
        imgN++
        this.scene.load.image(String(this.id), this.path)
    },

    setScale(scale)
    {
        if (scale > 0)
            this.scale = scale
    },

    create(x = 0, y = 0)
    {
        this.scene.add.image(x * this.scale, y * this.scale, this.id).setOrigin(0, 0)
    }
})