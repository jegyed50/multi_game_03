input.onButtonPressed(Button.A, function () {
    if (game_sorszam == 0) {
        game_A()
    } else if (game_sorszam == 1) {
        game_B()
    } else if (game_sorszam == 2) {
        game_C()
    }
    game_init(game_tomb[game_sorszam])
})
function game_A () {
    while (game_sorszam == 0) {
        if (game_sorszam == 0) {
            basic.clearScreen()
            for (let index = 0; index <= 4; index++) {
                led.plot(index, 0)
                basic.pause(200)
                if (game_sorszam != 0) {
                    break;
                }
            }
        } else {
            break;
        }
    }
}
function game_init (game_char: string) {
    basic.clearScreen()
    basic.showString(game_char)
    basic.pause(500)
}
function game_C () {
    if (game_sorszam == 2) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
    }
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (game_sorszam < game_tomb.length - 1) {
        game_sorszam += 1
    } else {
        game_sorszam = 0
    }
    game_init(game_tomb[game_sorszam])
})
function game_B () {
    if (game_sorszam == 1) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
    }
}
let game_sorszam = 0
let game_tomb: string[] = []
// game_tomb = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
game_tomb = ["A", "B", "C"]
game_sorszam = 0
basic.showString("" + (game_tomb[game_sorszam]))
basic.pause(500)
basic.forever(function () {
	
})
