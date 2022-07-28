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
    'https://github.com/m-medeiros/FocusTimer2.0/blob/master/assets/sounds/Chuva.wav?raw=true'
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
