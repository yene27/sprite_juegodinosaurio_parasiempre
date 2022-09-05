function introJuego () {
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # .
        # # # # .
        . # . # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # .
        # # # # #
        . # . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . # #
        . . # # #
        . # # # .
        # # # # .
        . # . # .
        `)
    basic.pause(200)
    basic.clearScreen()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
}
// Salta el dino
input.onButtonPressed(Button.A, function () {
    cabezaDino.change(LedSpriteProperty.Y, -1)
    cuerpoDino.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    cuerpoDino.change(LedSpriteProperty.Y, 1)
    cabezaDino.change(LedSpriteProperty.Y, 1)
})
// Con este bn se agacha el dino. Lo que se debe hacer es cambiar la coordenada de la cabeza
input.onButtonPressed(Button.B, function () {
    cabezaDino.change(LedSpriteProperty.Y, 1)
    cabezaDino.change(LedSpriteProperty.X, 1)
    basic.pause(1000)
    cabezaDino.change(LedSpriteProperty.Y, -1)
    cabezaDino.change(LedSpriteProperty.X, -1)
})
let tocoObstaculo = 0
let cuerpoDino: game.LedSprite = null
let cabezaDino: game.LedSprite = null
cabezaDino = game.createSprite(1, 3)
cuerpoDino = game.createSprite(1, 4)
let obstaculo = game.createSprite(4, randint(3, 4))
led.setBrightness(103)
game.setScore(0)
game.setLife(2)
basic.forever(function () {
    tocoObstaculo = 0
    basic.pause(500)
    obstaculo.change(LedSpriteProperty.X, -1)
    if (obstaculo.isTouching(cuerpoDino) || obstaculo.isTouching(cabezaDino)) {
        tocoObstaculo = 1
        basic.pause(1000)
        game.removeLife(1)
    }
    if (obstaculo.get(LedSpriteProperty.X) == 0) {
        basic.pause(500)
        obstaculo.set(LedSpriteProperty.X, 4)
        obstaculo.set(LedSpriteProperty.Y, randint(3, 4))
        if (tocoObstaculo == 0) {
            game.setScore(game.score() + 1)
        }
    }
})
