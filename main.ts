namespace SpriteKind {
    export const gemsPlayer = SpriteKind.create()
    export const gemsCatcher = SpriteKind.create()
    export const gems = SpriteKind.create()
    export const getGemsKind = SpriteKind.create()
    export const gemsKind = SpriteKind.create()
}
namespace getgems {

//碰到墙回退事件
scene.onOverlapTile(SpriteKind.gemsPlayer, sprites.builtin.forestTiles0, function (sprite, location) {
    if (heroDirection == 3) {
        heroRow += -1
    } else if (heroDirection == 0) {
        heroCol += -1
    } else if (heroDirection == 1) {
        heroRow += 1
    } else if (heroDirection == 2) {
        heroCol += 1
    }
    scene.cameraShake(4, 500)
    tiles.placeOnTile(gemsHero, tiles.getTileLocation(heroRow, heroCol))
})

//获得宝石事件
sprites.onOverlap(SpriteKind.gemsCatcher, SpriteKind.gems, function(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.player1.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.getGemsKind, SpriteKind.gemsKind, function(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.player1.changeScoreBy(-1)
    gemsNum-=1
})

//关卡设定
function levelset(level:number){
   switch(level){
				case 1:
                     tiles.setTilemap(tiles.createTilemap(hex`0a0008000202020202020202020202020202020202020202020202020202020202020202020102020202020202020203020202020202020202020202020202020202020202020202020202020202020202020202`, img`
                         . . . . . . . . . .
                         . . . . . . . . . .
                         . . . . . . . . . .
                         . . . . . . . . . .
                         . . . . . . . . . .
                         . . . . . . . . . .
                         . . . . . . . . . .
                         . . . . . . . . . .
                     `, [myTiles.transparency16,sprites.dungeon.buttonTealDepressed,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))   
					break;
				case 2:
                    tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101030000000001010101010000010002010101010101020100010101010101010000000101010101010101010101010101010101010101010101`, img`
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.dungeon.buttonTealDepressed], TileScale.Sixteen))
                    break;
				default:
                    tiles.setTilemap(tiles.createTilemap(hex`0a0008000301010101010201010100010101010100010101000101010101000101010001010101010001010100010101010100010101000101010101000101010200000000000201010101010101010101010101`, img`
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.dungeon.buttonTealDepressed], TileScale.Sixteen))
   
					break;
			}    
}


//变量声明
let gem: Sprite = null
let gemsHero: Sprite = null
let heroDirection = 0
let gemsNum = 0 
let level = 1
let heroRow = 0
let heroCol =0
heroDirection = 0
export enum turnDirection{
    left,
    right
    }

   //初始化
    //%block
    //%group="operate"
    export function initGame(){ 
        gemsHero = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.gemsPlayer)
        level = game.askForNumber("set level")
        levelset(level)
    tiles.placeOnRandomTile(gemsHero, img`
        b b b b b b b b b b b b b b b b
        b c b b b b b b b b b b b b c b
        b b b c 6 6 6 6 6 6 6 6 c b b b
        b b c 6 6 6 6 6 6 6 6 6 6 c b b
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b
        b b 6 6 6 6 6 6 6 6 6 6 6 6 b b
        b b 9 6 6 6 6 6 6 6 6 6 6 9 b b
        b b 9 6 6 6 6 6 6 6 6 6 6 9 b b
        b b 6 9 6 6 6 6 6 6 6 6 9 6 b b
        b b c 6 9 9 9 9 9 9 9 9 6 c b b
        b b b c c c c c c c c c c b b b
        b c b b b b b b b b b b b b c b
        b b b b b b b b b b b b b b b b
    `)
    for (let 值 of tiles.getTilesByType(sprites.dungeon.collectibleInsignia)) {
        gem = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . 4 4 4 4 . . . . . .
            . . . . 4 4 4 5 5 4 4 4 . . . .
            . . . 3 3 3 3 4 4 4 4 4 4 . . .
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . .
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . .
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 .
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 .
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 .
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 .
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . .
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . .
            . . . 4 2 2 2 2 2 2 2 2 4 . . .
            . . . . 4 4 2 2 2 2 4 4 . . . .
            . . . . . . 4 4 4 4 . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.gemsKind)
        tiles.placeOnTile(gem, 值)
        gemsNum+=1
        info.player1.setScore(gemsNum)
    }
    gemsHero.z = 1000
    let heroX = gemsHero.x
    let heroY = gemsHero.y
    heroRow = gemsHero.y/16-0.5
    heroCol =gemsHero.x/16-0.5
    gemsHero.say("改程序前，先画流程图")
}
    //获得宝石
    //%block
    //%group="operate"
    export function takeGems(){
    gemsHero.setKind(SpriteKind.getGemsKind)
    pause(100)
    music.baDing.play()
    gemsHero.setFlag(SpriteFlag.Ghost, true)
    gemsHero.y-=5
    pause(100)
    gemsHero.setKind(SpriteKind.gemsPlayer)
    gemsHero.setFlag(SpriteFlag.Ghost, false)
    gemsHero.y+=5
    if(gemsNum==0){
        game.over(true)
    }
}

    //转向
    //%block="turn %turnDirection"
    //%group="move"
    export function turn (choice: turnDirection) {
    // if (choice==right) {
    //     heroDirection += 1
    //     heroDirection = heroDirection % 4
    // } else {
    //     heroDirection += 3
    //     heroDirection = heroDirection % 4
    // }
    switch(choice){
        case turnDirection.right:
        heroDirection += 1
        heroDirection = heroDirection % 4
        break
        default :
        heroDirection += 3
        heroDirection = heroDirection % 4
        break
    }
    if (heroDirection == 3) {
        gemsHero.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
    } else if (heroDirection == 0) {
        gemsHero.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    } else if (heroDirection == 1) {
        gemsHero.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    } else if (heroDirection == 2) {
        gemsHero.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
    pause(500)
}
    //前进
    //%block
    //%group="move"
    export function stepForward () {
    if (heroDirection == 3) {
        heroRow += 1
    } else if (heroDirection == 0) {
        heroCol += 1
    } else if (heroDirection == 1) {
        heroRow += -1
    } else if (heroDirection == 2) {
        heroCol += -1
    }
    tiles.placeOnTile(gemsHero, tiles.getTileLocation(heroRow, heroCol))
    pause(500)
}


}
