radio.onReceivedNumber(function (receivedNumber) {
    radio.sendNumber(순번)
    basic.showNumber(순번)
})
input.onButtonPressed(Button.A, function () {
    if (순번 < 9) {
        순번 += 1
        basic.showNumber(순번)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(순번)
})
input.onButtonPressed(Button.B, function () {
    if (순번 > 1) {
        순번 += -1
        basic.showNumber(순번)
        basic.pause(100)
    }
})
let 순번 = 0
radio.setGroup(100)
순번 = 1
basic.showNumber(순번)
basic.pause(100)
basic.forever(function () {
    led.stopAnimation()
})
