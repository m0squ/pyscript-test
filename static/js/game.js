var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#4488aa',
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
    },
    callbacks: {
        postBoot: function (game) {
            game.canvas.style.width = '100%';
            game.canvas.style.height = '100%';
        }
    }
})

bg = null
goat = null
cube = null
function preload()
{
    this.load.setBaseURL("/assets")
    bgImg = new Img(this, "sprites/bg.png")
    goat = new Img(this, "sprites/goat.png")
    cube = new Img(this, "animations/cube.png")
}

function create()
{
    //game.canvas.width  = window.innerWidth;
    //game.canvas.height = window.innerHeight;
    bg = new Sprite(this)
    bg.setScale(window.innerWidth, window.innerHeight)
    bg.create(bgImg)
    cube.create()
    group = new PhysicsGroup(this)
    group.create(goat, 500, 500)
    group.setScale(.5)
    group.create(goat, 1000, 500)
    player = new Sprite(this, true)
    player.setBounce(.2)
    player.setCollideWorldBounds(true)
    player.addCollider(group)
    player.create(goat, 100, 100)
    anim = new Anim(this)
    anim.setImg(cube, 0, 3)
    anim.create("left")
    //button = this.add.button(0, 0, 'button', game.canvas.requestFullscreen(), this, 2, 1, 0);
    //button.onInputOver.add(game.canvas.requestFullscreen(), this);
    button = this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => game.canvas.requestFullscreen());
}

function update()
{
    game.canvas.style.width = '100%'
    game.canvas.style.height = '100%'
}