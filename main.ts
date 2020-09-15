controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 6; index++) {
            getgems.stepForward()
        }
        getgems.turn(turnDireciton.left)
        getgems.takeGems()
    }
})
