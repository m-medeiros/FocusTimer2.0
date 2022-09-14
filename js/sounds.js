import {
  volumeSliderCafeteria,
  volumeSliderFire,
  volumeSliderForest,
  volumeSliderRain,
  volumeSliderSound,
  cardCafeteria,
  cardForest
} from './elements.js'

export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/m-medeiros/FocusTimer2.0/blob/master/assets/sounds/mixkit-modern-technology-select-3124%20(mp3cut.net).wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const bgAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
  )
  const forestAudio = new Audio(
    'https://github.com/m-medeiros/FocusTimer2.0/blob/master/assets/sounds/Floresta.wav?raw=true'
  )
  const rainAudio = new Audio(
    'https://github.com/m-medeiros/FocusTimer2.0/blob/master/assets/sounds/sounds_heavy-rain.ogg?raw=true'
  )
  const cafeteriaAudio = new Audio(
    'https://github.com/m-medeiros/FocusTimer2.0/blob/master/assets/sounds/Cafeteria.wav?raw=true'
  )
  const fireAudio = new Audio(
    'https://github.com/m-medeiros/FocusTimer2.0/blob/master/assets/sounds/Lareira.wav?raw=true'
  )

  bgAudio.loop = true
  forestAudio.loop = true
  rainAudio.loop = true
  cafeteriaAudio.loop = true
  fireAudio.loop = true

  volumeSliderSound.addEventListener('input', () => {
    bgAudio.volume = volumeSliderSound.value / 100
  })

  volumeSliderForest.addEventListener('input', () => {
    forestAudio.volume = volumeSliderForest.value / 100
  })

  volumeSliderFire.addEventListener('input', () => {
    fireAudio.volume = volumeSliderFire.value / 100
  })

  volumeSliderRain.addEventListener('input', () => {
    rainAudio.volume = volumeSliderRain.value / 100
  })

  volumeSliderCafeteria.addEventListener('input', () => {
    cafeteriaAudio.volume = volumeSliderCafeteria.value / 100
  })

  volumeSliderForest.addEventListener('click', () => {
    if (cardForest.classList.contains('activated')) {
      cardForest.classList.remove('activated')
    } else {
      cardForest.classList.add('activated')
    }
  })

  volumeSliderRain.addEventListener('click', () => {
    if (cardRain.classList.contains('activated')) {
      cardRain.classList.remove('activated')
    } else {
      cardRain.classList.add('activated')
    }
  })

  volumeSliderCafeteria.addEventListener('click', () => {
    if (cardCafeteria.classList.contains('activated')) {
      cardCafeteria.classList.remove('activated')
    } else {
      cardCafeteria.classList.add('activated')
    }
  })

  volumeSliderFire.addEventListener('click', () => {
    if (cardFire.classList.contains('activated')) {
      cardFire.classList.remove('activated')
    } else {
      cardFire.classList.add('activated')
    }
  })

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    bgAudio,
    forestAudio,
    rainAudio,
    cafeteriaAudio,
    fireAudio
  }
}
