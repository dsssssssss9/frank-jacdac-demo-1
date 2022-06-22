modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showIcon(IconNames.Heart)
})
modules.button1.onEvent(jacdac.ButtonEvent.Up, function () {
    basic.clearScreen()
})
basic.forever(function () {
	
})
