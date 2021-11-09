let score_A = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(score_A)
    score_A += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(score_A)
    score_A += 2
})
basic.forever(function () {
	
})
