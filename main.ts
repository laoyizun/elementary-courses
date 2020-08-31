namespace SpriteKind {
    export const gemskind = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 6; index++) {
        getgems.stepForward()
    }
    getgems.turnRound(turnDireciton.left)
    for (let index = 0; index < 5; index++) {
        getgems.stepForward()
    }
    getgems.turnRound(turnDireciton.left)
    getgems.stepForward()
    getgems.turnRound(turnDireciton.right)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
tiles.setTilemap(tiles.createTilemap(hex`0c000a00000000000100000000000000000000000100000000000000000000010101010000000000000100000101000000000000000101010101010101010101000100000100000000000000000000000000010000000000010101010101010100000000000000000000000000000000000001000000000000000000`, img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.builtin.forestTiles0], TileScale.Sixteen))
tiles.setTileAt(tiles.getTileLocation(0, 0), sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(gemsHero, sprites.dungeon.collectibleInsignia)
let redGems = sprites.create(img`
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
    `, SpriteKind.gemskind)
