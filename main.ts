servos.P2.setAngle(0)
basic.forever(function () {
    servos.P2.setAngle(90)
    basic.pause(1000)
    servos.P2.setAngle(0)
    basic.pause(2000)
})
