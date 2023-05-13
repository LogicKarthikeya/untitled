input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
    }
})
