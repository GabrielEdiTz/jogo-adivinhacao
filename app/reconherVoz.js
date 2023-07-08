const elementoChute = document.getElementById ('chute')

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChute(chute)
}

function exibeChute(chute) {
    elementoChute.innerHTML = `<div class=sua-resposta>Você disse</div><span class="box">${chute}</span>`
    verificaValor(chute)
}

recognition.addEventListener('end', () => recognition.start())