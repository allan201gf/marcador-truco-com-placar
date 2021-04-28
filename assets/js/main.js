function marcadordetruco() {

    let pontosPato = 0;
    let pontosMataPato = 0;
    let patoTotal = 0;
    let mataPatoTotal = 0;

    
    return {

        pontos1: document.querySelector('.pontos1'), //Seleciona visor de pontos
        pontos2: document.querySelector('.pontos2'),
        ganhador: document.querySelector('.ganhador'), //Seleciona paragrafo para frase do ganhador
        placar: document.querySelector('.total'), //Seleciona o placar

        inicia() {
            this.computaPonto();
        },

        computaPonto() { //Registra o ponto de cada equipe de acordo com o botão clicado
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('eq1')) {
                    this.pontuacao1(el.innerText);
                } else if (el.classList.contains('eq2')) {
                    this.pontuacao2(el.innerText);
                }

            }.bind(this));
        },

        pontuacao1(valor) { //Função para computar os pontos da equipe MataPato
            valor = parseInt(valor);
            pontosMataPato = pontosMataPato + valor;
            this.pontos1.value = pontosMataPato;
            console.log(pontosMataPato, typeof (pontosMataPato));

            if (pontosMataPato >= 12) { //Caso o time MataPato ganhe...
                mataPatoTotal = mataPatoTotal + 1;
                this.placar.innerHTML = `<center>${mataPatoTotal} x ${patoTotal}</center>`
                this.ganhador.innerHTML = 'Os Mata Pato ganharam com ' + pontosMataPato + ' pontos !!';
                pontosPato = 0;
                pontosMataPato = 0;
                this.pontos2.value = pontosPato;
                this.pontos1.value = pontosMataPato;
            } else {
                this.ganhador.innerHTML = '';
            };

        },

        pontuacao2(valor) { //Função para computar os pontos da equipe Pato
            valor = parseInt(valor);
            pontosPato = pontosPato + valor;
            this.pontos2.value = pontosPato;
            console.log(pontosPato, typeof (pontosPato));

            if (pontosPato >= 12) { //Caso o time Pato ganhe...
                patoTotal = patoTotal + 1;
                this.placar.innerHTML = `<center>${mataPatoTotal} x ${patoTotal}</center>`                
                this.ganhador.innerHTML = 'Os Pato ganharam com ' + pontosPato + ' pontos !!';
                pontosPato = 0;
                pontosMataPato = 0;
                this.pontos2.value = pontosPato;
                this.pontos1.value = pontosMataPato;
            } else {
                this.ganhador.innerHTML = ''
            };

        }


    };
}

const marcadorDeTruco = marcadordetruco();
marcadorDeTruco.inicia();