var Sprite = new Phaser.Class(
{
    Extends: Phaser.GameObjects.Sprite,

    initialize: function Sprite(scene, physics = false)
    {
        this.scene = scene
        this.physics = physics
        this.scaleX = -1
        this.scaleY = -1
        this.bounce = 0
        this.collideWorldBounds = false
        this.colliders = []
    },

    setScale(scaleX, scaleY)
    {
        //this.sprite.scaleX = x / this.scene.canvas.width
        //this.sprite.scaleY = y / this.scene.canvas.height
        //this.sprite.displayWidth = x
        this.scaleX = scaleX
        this.scaleY = scaleY
    },

    checkPhysics(fromFunc, funcToExec)
    {
        if (this.physics)
            funcToExec()
        else
            warn(arguments, `Cannot execute some of the content of function Sprite.${fromFunc} because Sprite.physics = false`)
    },

    setBounce(bounce)
    {
        this.checkPhysics("setBounce", () => {
            if (bounce >= 0)
                this.bounce = bounce
            else
                warn(arguments, "Specify a value >= 0")
        })
    },

    setCollideWorldBounds(collideWorldBounds)
    {
        this.checkPhysics("setCollideWorldBounds", () => {
            this.collideWorldBounds = collideWorldBounds
        })

    },

    addCollider(collider)
    {
        this.checkPhysics("addCollider", () => {
            this.colliders.push(collider)
        })
    },

    create(img, x = 0, y = 0)
    {
        this.sprite = this.physics ? this.scene.physics.add.sprite(x, y, img.id) : this.scene.add.sprite(x, y, img.id)
        console.log(this.scaleX / this.sprite.width, this.scaleY / this.sprite.height)
        this.sprite.setScale((this.scaleX == -1 ? this.sprite.width : this.scaleX) / this.sprite.width, (this.scaleY == -1 ? this.sprite.height : this.scaleY) / this.sprite.height)
        this.checkPhysics("create", () => {
            this.sprite.setBounce(this.bounce)
            this.sprite.setCollideWorldBounds(this.collideWorldBounds)
            for (n = 0; n < this.colliders.length; n++)
            {
                this.scene.physics.add.collider(this.sprite, this.colliders[n])
            }
        })
    }
})