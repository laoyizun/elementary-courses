namespace SpriteKind {
    export const gemskind = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 6; index++) {
        getgems.stepForward()
    }
    getgems.turn(turnDireciton.left)
    for (let index = 0; index < 9; index++) {
        getgems.stepForward()
    }
})
