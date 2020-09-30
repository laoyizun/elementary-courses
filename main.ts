namespace SpriteKind {
    export const gemsPlayer = SpriteKind.create()
    export const gems = SpriteKind.create()
    export const getGemsKind = SpriteKind.create()
    export const gemsKind = SpriteKind.create()
    export const iceMagic = SpriteKind.create()
    export const fireMagic = SpriteKind.create()
}
//% weight=100 color=#6699CC icon="\uf140" block="Getgems"
//% groups='["Operate","Others","Move"]'
namespace getgems {

//角色碰到障碍物回退
function goBack(){
 if (heroDirection == 3) {
        heroCol += -1
    } else if (heroDirection == 0) {
        heroRow += -1
    } else if (heroDirection == 1) {
        heroCol += 1
    } else if (heroDirection == 2) {
        heroRow += 1
    }
    scene.cameraShake(4, 500)
    tiles.placeOnTile(gemsHero, tiles.getTileLocation(heroCol, heroRow))
}

//事件注册
//魔法消除障碍物碰撞事件
scene.onOverlapTile(SpriteKind.fireMagic, img`
    . . . . . . c c . . . . . c c .
    . . . c c . c 3 c . c c . c 3 c
    . . c 3 6 c 3 3 c . c 3 c 6 3 c
    . . c 3 3 3 3 6 c . c 3 6 3 3 c
    . . . c 6 3 6 6 c c c 3 3 3 c .
    . . . . c c 6 6 c 6 c 6 3 3 c .
    . . . . c 3 c 6 c 3 3 c 6 6 c .
    c c . c 3 3 c c c c 3 3 c 6 c .
    c 3 c c 3 6 6 c 3 c 3 6 c 6 c .
    c 3 3 6 3 6 3 6 3 3 3 c c c c c
    . c 3 3 3 c 3 3 6 3 6 c c 3 3 c
    . . c 3 3 c c 3 3 3 6 c 3 3 6 .
    c c c 6 3 6 c c 6 3 6 6 3 6 c c
    c 3 3 3 3 3 c c c 3 6 3 3 3 3 c
    . c c 6 6 3 6 6 c 6 3 3 6 c c .
    . . . c 6 3 3 6 6 6 6 3 c . . .
`, function(sprite: Sprite, location: tiles.Location) {
    tiles.setTileAt(tiles.getTileLocation(location.col,location.row), img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
})
scene.onOverlapTile(SpriteKind.iceMagic, img`
    5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4
    4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5
    4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5
    2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4
    2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4
    4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2
    2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2
    4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4
    5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4
    4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5
    4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5
    5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5
    5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4
    4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4
    4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4
    4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4
`, function(sprite: Sprite, location: tiles.Location) {
    tiles.setTileAt(tiles.getTileLocation(location.col,location.row), img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
})

//碰到墙回退
scene.onOverlapTile(SpriteKind.gemsPlayer, sprites.builtin.forestTiles0, function (sprite, location) {
   pause(500) 
   goBack()

})
//碰到熔岩
scene.onOverlapTile(SpriteKind.gemsPlayer, img`
    5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4
    4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5
    4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5
    2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4
    2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4
    4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2
    2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2
    4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4
    5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4
    4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5
    4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5
    5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5
    5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4
    4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4
    4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4
    4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4
`, function(sprite: Sprite, location: tiles.Location) {
    goBack()
    gemsHero.say("there is lava ahead,I can not go!")

})
//碰到毒草
scene.onOverlapTile(SpriteKind.gemsPlayer, img`
    . . . . . . c c . . . . . c c .
    . . . c c . c 3 c . c c . c 3 c
    . . c 3 6 c 3 3 c . c 3 c 6 3 c
    . . c 3 3 3 3 6 c . c 3 6 3 3 c
    . . . c 6 3 6 6 c c c 3 3 3 c .
    . . . . c c 6 6 c 6 c 6 3 3 c .
    . . . . c 3 c 6 c 3 3 c 6 6 c .
    c c . c 3 3 c c c c 3 3 c 6 c .
    c 3 c c 3 6 6 c 3 c 3 6 c 6 c .
    c 3 3 6 3 6 3 6 3 3 3 c c c c c
    . c 3 3 3 c 3 3 6 3 6 c c 3 3 c
    . . c 3 3 c c 3 3 3 6 c 3 3 6 .
    c c c 6 3 6 c c 6 3 6 6 3 6 c c
    c 3 3 3 3 3 c c c 3 6 3 3 3 3 c
    . c c 6 6 3 6 6 c 6 3 3 6 c c .
    . . . c 6 3 3 6 6 6 6 3 c . . .
`, function(sprite: Sprite, location: tiles.Location) {
    goBack()
    gemsHero.say("There is poison plant,I can not go!")

})

//获得宝石事件

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
                    tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101000003000001010101010000010002010101010101010100010101010101010000000101010101010101010101010101010101010101010101`, img`
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
				case 3:
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
                case 4:
                    tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101000004020101010101010000010101010101020500000101010101010101000003010101010101010101010101010101010101010101010101`, img`
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.dungeon.buttonTealDepressed,sprites.dungeon.hazardLava1,sprites.builtin.coral0], TileScale.Sixteen))
                    break;
                case 5:
                    tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101030101010101010101010004020101010101010100010101010101010101000101010101010101010004020101010101010100010101010101010101010101010101010101`, img`
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.dungeon.buttonTealDepressed,sprites.dungeon.hazardLava1], TileScale.Sixteen))
                    break;
                case 6:
                    tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101030101010101010101010401010101010101010102010101010101010101050101010101010101010201010101010101010104010101010101010101020101010101010101`, img`
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.dungeon.buttonTealDepressed,sprites.dungeon.hazardLava1,sprites.builtin.coral0], TileScale.Sixteen))
                    break;
                case 7:
                    let L7random = randint(0, 3)
                    switch (L7random){
                        case 0:
                        tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010102010101010101010101000101010101010101010301010101010101010101010101010101010101010101010101`, img`
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                        `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.buttonTealDepressed,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
                        break;
                        case 1:
                        tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010102000301010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                        `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.buttonTealDepressed,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
                        break;
                        case 2:
                        tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101030101010101010101010001010101010101010102010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                        `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.buttonTealDepressed,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
                        break;
                        case 3:
                        tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101030002010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                            . . . . . . . . . .
                        `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.buttonTealDepressed,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
                        break;
                    }
                    break;
                case 8:
                    tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101030000000100000001010101010001000100010100000000000001000101000101010101000001010000010201010100010100000100000000000101010101010101010101`, img`
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
                case 9:
                    tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101030101010101010101010401010101010101010102010101010101010101050101010101010101010201010101010101010104010101010101010101020101010101010101`, img`
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                        . . . . . . . . . .
                    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,sprites.dungeon.buttonTealDepressed,sprites.dungeon.hazardLava1,sprites.builtin.coral0], TileScale.Sixteen))
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
let heroCol = 0
heroDirection = 0
export enum turnDirection{
    left,
    right
    }
export enum magicKind{
    fire ,
    ice
}
export enum obastaleKind{
    lava ,
    plant
}
export let frontOfHero ={
    //行
    row:0,
    //列
    col:0
}


//获取角色前方
function getTheFrontOfHero():any{
let addRow = 0
let addCol = 0
 if (heroDirection == 3) {
        addCol += 1
    } else if (heroDirection == 0) {
        addRow += 1
    } else if (heroDirection == 1) {
        addCol += -1
    } else if (heroDirection == 2) {
        addRow += -1
    }

frontOfHero.row = heroRow+addRow
frontOfHero.col = heroCol+addCol
return frontOfHero
}


//初始化
//%block
//%group="Operate"
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
    level = game.askForNumber("set level(1-6)")
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
    pause(500)
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
    heroRow = gemsHero.y/16-0.5
    heroCol = gemsHero.x/16-0.5
    gemsHero.say("改程序前，先画流程图",3000)
}

//获得宝石
//%block
//%group="Operate"
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


//施法
function actionOfMagic(isIceMagic:boolean){

    if(isIceMagic){
        let magicCube = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . 8 8 8 8 8 8 8 . . . . .
            . . . . 8 1 1 1 1 1 8 . . . . .
            . . . . 8 1 1 1 1 1 8 . . . . .
            . . . . 8 1 1 9 1 1 8 . . . . .
            . . . . 8 1 1 1 1 1 8 . . . . .
            . . . . 8 1 1 1 1 1 8 . . . . .
            . . . . 8 8 8 8 8 8 8 . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `,SpriteKind.iceMagic)
        tiles.placeOnTile(magicCube, tiles.getTileLocation(frontOfHero.col, frontOfHero.row))
        pause(500)
        magicCube.destroy(effects.coolRadial,500)
    }
    else{
        let magicCube2 = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . 2 2 2 2 2 2 2 . . . . .
            . . . . 2 5 5 5 5 5 2 . . . . .
            . . . . 2 5 5 5 5 5 2 . . . . .
            . . . . 2 5 5 4 5 5 2 . . . . .
            . . . . 2 5 5 5 5 5 2 . . . . .
            . . . . 2 5 5 5 5 5 2 . . . . .
            . . . . 2 2 2 2 2 2 2 . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `,SpriteKind.fireMagic)
        tiles.placeOnTile(magicCube2, tiles.getTileLocation(frontOfHero.col, frontOfHero.row))
        pause(500)
        magicCube2.destroy(effects.fire,500)
    }
}
//使用魔法
//%block="use %magicKind magic"
//%group="Operate"
export function useMagic(choice:magicKind){
    getTheFrontOfHero()
    switch(choice){
        case magicKind.ice:
        if(tiles.tileAtLocationEquals(tiles.getTileLocation(frontOfHero.col, frontOfHero.row), img`
            5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4
            4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5
            4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5
            2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4
            2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4
            4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2
            2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2
            4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4
            5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4
            4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5
            4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5
            5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5
            5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4
            4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4
            4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4
            4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4
        `)){    
            actionOfMagic(true)
        }
        else{
            gemsHero.say("There is not hot lava need to be frozen!")
        }
        break
        default:
        if(tiles.tileAtLocationEquals(tiles.getTileLocation(frontOfHero.col, frontOfHero.row), img`
            . . . . . . c c . . . . . c c .
            . . . c c . c 3 c . c c . c 3 c
            . . c 3 6 c 3 3 c . c 3 c 6 3 c
            . . c 3 3 3 3 6 c . c 3 6 3 3 c
            . . . c 6 3 6 6 c c c 3 3 3 c .
            . . . . c c 6 6 c 6 c 6 3 3 c .
            . . . . c 3 c 6 c 3 3 c 6 6 c .
            c c . c 3 3 c c c c 3 3 c 6 c .
            c 3 c c 3 6 6 c 3 c 3 6 c 6 c .
            c 3 3 6 3 6 3 6 3 3 3 c c c c c
            . c 3 3 3 c 3 3 6 3 6 c c 3 3 c
            . . c 3 3 c c 3 3 3 6 c 3 3 6 .
            c c c 6 3 6 c c 6 3 6 6 3 6 c c
            c 3 3 3 3 3 c c c 3 6 3 3 3 3 c
            . c c 6 6 3 6 6 c 6 3 3 6 c c .
            . . . c 6 3 3 6 6 6 6 3 c . . .
        `)){    
            actionOfMagic(false)
        }else{
            gemsHero.say("There is not poison plant need to be fired!")
        }
        break
    }
}
    //判断前方障碍物
    //%block="there is %obstaleKind ahead"
    //%group="Others"
    export function isObastaleAhead(choice:obastaleKind): boolean {
        getTheFrontOfHero()
        if(choice == obastaleKind.lava){
            if(tiles.tileAtLocationEquals(tiles.getTileLocation(frontOfHero.col, frontOfHero.row), img`
                5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4
                4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5
                4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5
                2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4
                2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4
                4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2
                2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2
                4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4
                5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4
                4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5
                4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5
                5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5
                5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4
                4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4
                4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4
                4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4
            `)){return true}return false}
        else{if(tiles.tileAtLocationEquals(tiles.getTileLocation(frontOfHero.col, frontOfHero.row), img`
            . . . . . . c c . . . . . c c .
            . . . c c . c 3 c . c c . c 3 c
            . . c 3 6 c 3 3 c . c 3 c 6 3 c
            . . c 3 3 3 3 6 c . c 3 6 3 3 c
            . . . c 6 3 6 6 c c c 3 3 3 c .
            . . . . c c 6 6 c 6 c 6 3 3 c .
            . . . . c 3 c 6 c 3 3 c 6 6 c .
            c c . c 3 3 c c c c 3 3 c 6 c .
            c 3 c c 3 6 6 c 3 c 3 6 c 6 c .
            c 3 3 6 3 6 3 6 3 3 3 c c c c c
            . c 3 3 3 c 3 3 6 3 6 c c 3 3 c
            . . c 3 3 c c 3 3 3 6 c 3 3 6 .
            c c c 6 3 6 c c 6 3 6 6 3 6 c c
            c 3 3 3 3 3 c c c 3 6 3 3 3 3 c
            . c c 6 6 3 6 6 c 6 3 3 6 c c .
            . . . c 6 3 3 6 6 6 6 3 c . . .
        `)){return true}return false}
    }
    //判断前方障碍物
    //%block="there is a wall ahead"
    //%group="Others"
    export function isWallAhead(): boolean {
        getTheFrontOfHero()
            if(tiles.tileAtLocationEquals(tiles.getTileLocation(frontOfHero.col, frontOfHero.row), img`
                . . . 6 6 6 6 6 6 6 6 6 6 . . .
                . 6 6 7 7 7 7 7 7 7 7 7 7 6 6 .
                . 6 7 7 7 7 7 7 7 7 7 7 7 7 6 .
                6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6
                6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6
                6 7 6 7 7 7 7 7 7 7 7 7 7 6 7 6
                8 6 7 7 7 7 7 7 7 7 7 7 7 7 6 8
                8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8
                6 7 6 7 7 7 6 7 7 7 7 6 7 7 7 6
                6 8 6 7 7 6 7 7 7 6 7 7 6 6 8 6
                8 6 6 7 6 6 7 7 6 6 6 7 6 6 6 8
                8 6 8 6 6 6 7 6 6 6 6 6 8 6 6 8
                8 8 6 6 8 6 6 6 8 6 6 6 8 8 8 8
                . f 6 e e 8 6 6 8 8 6 8 8 8 f .
                . . f e e e 6 e 8 8 f f 8 f . .
                . . . f f f 8 e e f f f f . . .
            `)){return true}return false}
        
            
    

    //转向
    //%block="turn %turnDirection"
    //%group="Move"
    export function turn (choice: turnDirection) {
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
    if (heroDirection == 3) {//向右
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
    } else if (heroDirection == 0) {//向下
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
    } else if (heroDirection == 1) {//向左
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
    } else if (heroDirection == 2) {//向上
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
    //%group="Move"
    export function stepForward () {
    if (heroDirection == 3) {
        heroCol += 1
    } else if (heroDirection == 0) {
        heroRow += 1
    } else if (heroDirection == 1) {
        heroCol += -1
    } else if (heroDirection == 2) {
        heroRow += -1
    }
    tiles.placeOnTile(gemsHero, tiles.getTileLocation(heroCol, heroRow))
    pause(500)
}


}

