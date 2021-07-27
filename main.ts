input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() < 136 && input.compassHeading() > 45) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # .
            # . . . .
            # # # # #
            `)
    } else if (input.compassHeading() < 225 && input.compassHeading() > 136) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
    } else if (input.compassHeading() < 315 && input.compassHeading() > 226) {
        basic.showLeds(`
            # . . . #
            # . # . #
            # . # . #
            # . # . #
            . # . # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
})
