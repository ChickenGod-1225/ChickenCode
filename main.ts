/**
 */
input.onPinPressed(TouchPin.P0, function () {
    pauseUntil(() => input.pinIsPressed(TouchPin.P1))
    pauseUntil(() => input.pinIsPressed(TouchPin.P2))
    pauseUntil(() => input.pinIsPressed(TouchPin.P2))
    pauseUntil(() => input.pinIsPressed(TouchPin.P1))
    pauseUntil(() => input.pinIsPressed(TouchPin.P0))
    game.setLife(9999999)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 0, 170, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 0, 170, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 0, 170, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    战机.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 5000, 1, 255, 68, 170, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    子弹.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    子弹.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    子弹.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    子弹.set(LedSpriteProperty.Y, 5)
    basic.pause(子弹速度)
})
input.onButtonPressed(Button.B, function () {
    战机.change(LedSpriteProperty.X, 1)
})
let 关卡 = 0
let 子弹速度 = 0
let 子弹: game.LedSprite = null
let 战机: game.LedSprite = null
let _777 = 0
game.setLife(3)
let 速度 = 1
战机 = game.createSprite(2, 4)
子弹 = game.createSprite(2, 4)
let 敌人1 = game.createSprite(2, 0)
let 敌人2 = game.createSprite(2, 0)
子弹速度 = 1100
music.setVolume(255)
music.setBuiltInSpeakerEnabled(false)
game.setScore(0)
basic.forever(function () {
    关卡 += 1
    basic.pause(15000)
    if (game.isGameOver()) {
    	
    } else {
        _777 = 1
        敌人2.delete()
        game.pause()
        basic.showLeds(`
            . . . . .
            . # . . .
            # # . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        pauseUntil(() => input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A))
        if (input.buttonIsPressed(Button.A)) {
            game.addLife(1)
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
            速度 += 0.5
            basic.showNumber(关卡)
            game.resume()
            _777 = 0
        } else {
            子弹速度 += -200
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
            速度 += 1
            basic.showNumber(关卡)
            game.resume()
            _777 = 0
        }
    }
})
basic.forever(function () {
    if (战机.isTouching(敌人1) || 战机.isTouching(敌人2)) {
        if (true) {
            basic.pause(50)
            game.addLife(-1)
        }
    }
})
basic.forever(function () {
    子弹.set(LedSpriteProperty.X, 战机.get(LedSpriteProperty.X))
})
basic.forever(function () {
    if (子弹.isTouching(敌人1)) {
        敌人1.set(LedSpriteProperty.X, randint(0, 4))
        game.setScore(game.score() + 1)
    }
    if (子弹.isTouching(敌人2)) {
        敌人2.set(LedSpriteProperty.X, randint(0, 4))
        game.setScore(game.score() + 1)
    }
})
basic.forever(function () {
    if (0 != _777) {
    	
    } else {
        basic.pause(4)
        敌人1.set(LedSpriteProperty.X, randint(0, 4))
        敌人1.change(LedSpriteProperty.Y, 1)
        basic.pause(200 / 速度)
        敌人1.change(LedSpriteProperty.Y, 1)
        basic.pause(200 / 速度)
        敌人1.change(LedSpriteProperty.Y, 1)
        basic.pause(200 / 速度)
        敌人1.change(LedSpriteProperty.Y, 1)
        basic.pause(300 / 速度)
        敌人1.change(LedSpriteProperty.Y, -4)
    }
})
basic.forever(function () {
    if (0 != _777) {
    	
    } else {
        basic.pause(4)
        敌人2.set(LedSpriteProperty.X, randint(0, 4))
        敌人2.change(LedSpriteProperty.Y, 1)
        basic.pause(170 / 速度)
        敌人2.change(LedSpriteProperty.Y, 1)
        basic.pause(170 / 速度)
        敌人2.change(LedSpriteProperty.Y, 1)
        basic.pause(170 / 速度)
        敌人2.change(LedSpriteProperty.Y, 1)
        basic.pause(250 / 速度)
        敌人2.change(LedSpriteProperty.Y, -4)
    }
})
