input.onButtonPressed(Button.A, function () {
    if (player.isTouchingEdge()) {
    	
    } else {
        player.change(LedSpriteProperty.X, -1)
        player2.change(LedSpriteProperty.X, -1)
    }
})
input.onGesture(Gesture.Shake, function () {
    a = 1
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    if (player2.isTouchingEdge()) {
    	
    } else {
        player.change(LedSpriteProperty.X, 1)
        player2.change(LedSpriteProperty.X, 1)
    }
})
let a = 0
let player: game.LedSprite = null
let player2: game.LedSprite = null
player2 = game.createSprite(3, 3)
player = game.createSprite(2, 3)
a = 0
let sprite = 800
let ball = game.createSprite(2, 0)
ball.turn(Direction.Right, 45)
basic.forever(function () {
    while (a == 1) {
        ball.move(1)
        ball.ifOnEdgeBounce()
        basic.pause(sprite)
        sprite += -10
    }
})
basic.forever(function () {
    while (player2.isTouching(ball)) {
        ball.change(LedSpriteProperty.Y, -2)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        if (Math.randomBoolean()) {
            ball.turn(Direction.Right, 90)
        } else {
            ball.turn(Direction.Right, 180)
        }
    }
    while (player.isTouching(ball)) {
        ball.change(LedSpriteProperty.Y, -2)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        if (Math.randomBoolean()) {
            ball.turn(Direction.Left, 90)
        } else {
            ball.turn(Direction.Left, 180)
        }
    }
})
basic.forever(function () {
    while (ball.get(LedSpriteProperty.Y) == 4) {
        a = 0
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        game.gameOver()
    }
})
