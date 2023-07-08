function iniciaConfetes() {
    confetti.start();
    setTimeout(() => confetti.stop(), 3000);
}

function verificaValor(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido! Apenas números são aceitos</div>'
        return
    }
    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido, seu número precisa ser de ${menorValor} a ${maiorValor}.`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `<h2 class="correto"><strong>Parabéns! Você acertou.</strong><br><br>O número correto é: ${numeroSecreto}</h2>
        <button id="jogar-novamente" class="jogar-novamente">Jogar Novamente</button>`;

            //EFEITO CONFETE        
            const button = document.querySelector('#button');
            const canvas = document.querySelector('#confetti');
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti({
            }).then(() => jsConfetti.addConfetti())

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div class="texto-dica">O número secreto é menor que ${chute} <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div class="texto-dica">O número secreto é maior que ${chute} <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
});
