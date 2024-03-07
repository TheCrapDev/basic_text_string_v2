input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("C5 B A G A G A B ", 120), music.PlaybackMode.UntilDone)
    basic.showString("-Made By Ashton!-")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onShake(function () {
    basic.showString("-Text-")
})
