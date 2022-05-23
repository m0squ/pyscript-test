var Sprite = new Phaser.Class(
{
    Extends: Phaser.GameObjects.Sprite,

    initialize: function Sprite(scene, img, x = 0, y = 0)
    {
        this.scene = scene
        this.repeat = -1
        this.frameRate = 10
        this.frames = null
        this.sprite = this.scene.physics.add.sprite(x, y, img.id)
        this.setCollideWorldBounds(true)
    },

    setBounce(bounce)
    {
        if (bounce > 0)
            this.sprite.setBounce(bounce)
    },

    setCollideWorldBounds(collideWorldBounds)
    {
        this.sprite.setCollideWorldBounds(collideWorldBounds)
    },

    addCollider(collider)
    {
        this.scene.physics.add.collider(this.sprite, collider)
    }
})