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
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000010101010101000000010101010101010100000101010101010101000001010101010101010000010101010101010100000101010101010101000000000000000000000001010101010101010101`, img`
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
`, [myTiles.transparency16,sprites.builtin.forestTiles0], TileScale.Sixteen))
tiles.setTileAt(tiles.getTileLocation(0, 0), sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(gemsHero, sprites.dungeon.collectibleInsignia)
