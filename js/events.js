import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  cardForest,
  cardRain,
  cardCafeteria,
  cardFire,
  buttonTimerUp,
  buttonTimerDown,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonSoundOff.addEventListener('click', function () {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
  })

  buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })

  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  cardForest.addEventListener('click', function () {
    if (cardForest.classList.contains('activated')) {
      cardForest.classList.remove('activated')
      sound.forestAudio.pause()
    } else {
      cardForest.classList.add('activated')
      sound.forestAudio.play()
    }
  })

  cardRain.addEventListener('click', function () {
    if (cardRain.classList.contains('activated')) {
      cardRain.classList.remove('activated')
      sound.rainAudio.pause()
    } else {
      cardRain.classList.add('activated')
      sound.rainAudio.play()
    }
  })

  cardCafeteria.addEventListener('click', function () {
    if (cardCafeteria.classList.contains('activated')) {
      cardCafeteria.classList.remove('activated')
      sound.cafeteriaAudio.pause()
    } else {
      cardCafeteria.classList.add('activated')
      sound.cafeteriaAudio.play()
    }
  })

  cardFire.addEventListener('click', function () {
    if (cardFire.classList.contains('activated')) {
      cardFire.classList.remove('activated')
      sound.fireAudio.pause()
    } else {
      cardFire.classList.add('activated')
      sound.fireAudio.play()
    }
  })

  buttonTimerUp.addEventListener('click', function () {
    let newMinutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    newMinutes = newMinutes + 5

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, seconds)
    timer.updateMinutes(newMinutes)
    sound.pressButton()
  })

  buttonTimerDown.addEventListener('click', function () {
    let newMinutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    newMinutes = newMinutes - 5

    if (newMinutes === undefined) {
      timer.reset()
      return
    }
    if (newMinutes <= 0) {
      newMinutes = 0
      seconds = 0
    }
    timer.updateDisplay(newMinutes, seconds)
    timer.updateMinutes(newMinutes)
    sound.pressButton()
  })
}
