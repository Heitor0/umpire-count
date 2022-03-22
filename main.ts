let Number_of_Balls = 0
let num_strikes = 0
input.onButtonPressed(Button.A, function () {
    Number_of_Balls += 1
    basic.showNumber(Number_of_Balls)
    if (Number_of_Balls == 4) {
        basic.showIcon(IconNames.No)
        music.playTone(294, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.No)
        music.playTone(294, music.beat(BeatFraction.Double))
        basic.clearScreen()
        Number_of_Balls = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    num_strikes += 1
    basic.showNumber(num_strikes)
    if (num_strikes == 3) {
        basic.showIcon(IconNames.No)
        music.playTone(294, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.No)
        music.playTone(294, music.beat(BeatFraction.Double))
        basic.clearScreen()
        num_strikes = 0
    }
})
basic.forever(function () {
	
})
