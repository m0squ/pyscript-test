var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1680,
    height: 1280,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
})

function renderImg(img, x = 0, y = 0)
{
    this.add.image(0, 0, img).setOrigin(x, y)
}

function preload()
{
    //this.load.setBaseURL('https://labs.phaser.io');
    //this.load.image('sky', 'assets/skies/clouds.png');
    this.load.setBaseURL("/assets");
    this.load.image("bg", "sprites/bg.png")
    //this.load.image('red', 'assets/particles/red.png');
}

function create()
{
    renderImg("bg")
}