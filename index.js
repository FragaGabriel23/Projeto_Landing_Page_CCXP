const Dia = document.getElementById('Dia')
const Hora = document.getElementById('Hora')
const Minuto = document.getElementById('Minuto')
const Segundo = document.getElementById('Segundo')

const dataCCXP = "01 Dec 2023"

function countDown() 
{

    const dataHoje = new Date()
    const dataFim = new Date(dataCCXP)
    const segundosFinal = (dataFim - dataHoje) / 1000

    const finalDias = Math.floor(segundosFinal / 60 / 60 / 24);
    const finalHoras = Math.floor(segundosFinal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segundosFinal / 60) % 60;
    const finalSegundos = Math.floor(segundosFinal) % 60;

    Dia.innerHTML = formatacao(finalDias)
    Hora.innerHTML = formatacao(finalHoras)
    Minuto.innerHTML = formatacao(finalMinutos)
    Segundo.innerHTML = formatacao(finalSegundos)
}

function formatacao(tempo) 
{

    return tempo < 10? `0${tempo}`: tempo;

}

function highLightCard(id)
{
    var ingresso = document.querySelector(id);
    
    ingresso.classList.toggle('card-highLight');
}

function addKeyboardEventListeners() 
{
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById('Quinta')
        var ingresso2 = document.getElementById('Sexta')
        var ingresso3 = document.getElementById('Sabado')
        var ingresso4 = document.getElementById('Domingo')

        var code = event.code;
        if (code == 'Digit1') {
            ingresso1.classList.toggle("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if (code == 'Digit2') {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.toggle("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if (code == 'Digit3') {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.toggle("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }
        if (code == 'Digit4') {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.toggle("card-highLight");
        }
    })
}

//captura o codigo e nome da tecla presionada 
function checkKeyboardCode() 
{
    document.addEventListener('keydown', (event) =>{
        var name = event.key;
        var code = event.code;

        alert(`Tecla presionada ${name} \r\n ${code}`)
    }, false);
}

countDown()

setInterval(countDown, 1000)

addKeyboardEventListeners()