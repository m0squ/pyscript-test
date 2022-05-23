var Anim = new Phaser.Class(
{
    Extends: Phaser.GameObjects.Animation,

    initialize: function Anim(scene)
    {
        this.scene = scene
        this.repeat = -1
        this.frameRate = 10
        this.frames = null
    },

    setRepeat(repeat)
    {
        if (repeat >= -1)
            this.repeat = repeat
    },

    setFrameRate(frameRate)
    {
        if (frameRate >= 1)
            this.frameRate = frameRate
    },

    setImg(img, startFrame, endFrame = -1)
    {
        imgId = img.id
        if (endFrame == -1)
            this.frames = [{ key: imgId, frame: startFrame }]
        else
            this.frames = this.scene.anims.generateFrameNumbers(imgId, { start: startFrame, end: endFrame })
    },

    create(key)
    {
        this.scene.anims.create({
            key: key,
            frames: this.frames,
            frameRate: this.frameRate,
            repeat: this.repeat
        })
    }
})