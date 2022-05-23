var Physics = new Phaser.Class(
    {
        Extends: Phaser.Physics.Arcade.StaticGroup,
    
        initialize: function Physics(scene)
        {
            this.scene = scene
            this.scale = 1
            this.group = this.scene.physics.add.staticGroup()
        },

        setScale(scale)
        {
            if (scale > 0)
                this.scale = scale
        },

        create(img, x = 0, y = 0)
        {
            this.group.create(x, y, img.id).setOrigin(0, 0).setScale(this.scale, this.scale)
        }
    })