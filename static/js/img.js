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

    setScalePx(width, height)
    {
        if (width > 0 && height > 0)
        {
            this.id.width = width
            this.id.height = height
        }
    },

    create(x = 0, y = 0)
    {
        this.scene.add.image(x, y, this.id).setOrigin(0, 0)
    }
})