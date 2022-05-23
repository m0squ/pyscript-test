var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1680,
    height: 1280,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
})

bg = null
goat = null
cube = null
function preload()
{
    this.load.setBaseURL("/assets")
    bg = new Img(this, "sprites/bg.png")
    goat = new Img(this, "sprites/goat.png")
    cube = new Img(this, "animations/cube.png")
}

function create()
{
    bg.create()
    cube.setScale(.5)
    cube.create()
    group = new Physics(this)
    group.create(goat, 500, 0)
    group.setScale(.5)
    group.create(goat, 1000, 0)
    player = new Sprite(this, goat)
    anim = new Anim(this)
    anim.setImg(cube, 0, 3)
    anim.create("left")
}

function update()
{

}