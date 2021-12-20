function carregar(){
 
    let nomeDrogaria = document.getElementById('nomeDrogaria')
    let dataAtual = document.getElementById('dataAtual')
    let whatsapp = document.getElementById('whatsapp')
    let horaAtual = document.getElementById('horaAtual')
    let plantaoAte = document.getElementById('plantaoAte')
    let endereco = document.getElementById('endereco')
    let telefone = document.getElementById('telefone')

    let data = new Date()
    dataAtual.innerHTML = data.toLocaleString('pt-Br', {dateStyle: 'full'})
    let diaPlantao = data.getDate()
    let mesPlantao = data.getMonth() + 1


    function staTerezinha(){
        nomeDrogaria.innerHTML = '<h4> DROGARIA STA TEREZINHA</h4>'
        whatsapp.href = 'https://wa.me/5535998434544'
        endereco.innerHTML=' Rua Silviano Brandao, 353'
        telefone.innerHTML='(35) 3424 - 1492'
    }
    function americana(){
        nomeDrogaria.innerHTML = '<h4> DROGARIA AMERICANA</h4>'
        whatsapp.href = 'https://wa.me/5535998434544'
        endereco.innerHTML='Rua Silviano Brandão, 443 '
        telefone.innerHTML='(35) 3424 - 1851'
    }
    function inova(){
        nomeDrogaria.innerHTML = '<h4> DROGARIA INOVA</h4>'
        whatsapp.href = 'https://wa.me/5535997584502'
        endereco.innerHTML='Praça Com. Ferreira de Matos, 334'
        telefone.innerHTML='(35) 3424 - 2425'
    }
    function nsObediencia(){
        nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA</h4>'
        whatsapp.href = 'https://wa.me/5535999378338'
        endereco.innerHTML='Rua Duque de Caxias, 244'
        telefone.innerHTML='(35) 3424 - 1361'
    }




    //ATUALIZADO EM 18/12/2021

    //JANEIRO
    if(mesPlantao == 1){
        //AMERICANA
        if(diaPlantao == 23 || diaPlantao == 22){
            americana()

        //INOVA
        } else if(diaPlantao == 9 || diaPlantao == 8){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 2 || diaPlantao == 30 || diaPlantao == 1 || diaPlantao == 29){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 16 || diaPlantao == 15 ){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    //FEVEREIRO
    if(mesPlantao == 2){
        //AMERICANA
        if(diaPlantao == 19 || diaPlantao == 20){
            americana()

        //INOVA
        } else if(diaPlantao == 5 || diaPlantao == 6){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 26 || diaPlantao == 27){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 12 || diaPlantao == 13){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    //MARÇO
    if(mesPlantao == 3){
        //AMERICANA
        if(diaPlantao == 19 || diaPlantao == 20){
            americana()

        //INOVA
        } else if(diaPlantao == 5 || diaPlantao == 6){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 26 || diaPlantao == 27){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 12 || diaPlantao == 13){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    //ABRIL
    if(mesPlantao == 4){
        //AMERICANA
        if(diaPlantao == 16 || diaPlantao == 17){
            americana()

        //INOVA
        } else if(diaPlantao == 2 || diaPlantao == 3){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 23 || diaPlantao == 24){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 9 || diaPlantao == 10 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    //DAQUI PRA BAIXO AINDA NÃO SAIU A LISTA

    //MAIO
    if(mesPlantao == 5){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            americana()

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    //JUNHO
    if(mesPlantao == 6){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            americana()

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    //JULHO
    if(mesPlantao == 7){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            americana()

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    //AGOSTO
    if(mesPlantao == 8){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            americana()

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    //SETEMBRO
    if(mesPlantao == 9){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            americana()

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    //OUTUBRO
    if(mesPlantao == 10){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            americana()

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    //NOVEMBRO
    if(mesPlantao == 11){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            americana()

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }




    //DEZEMBRO
    if(mesPlantao == 12){
        //AMERICANA
        if(diaPlantao == 26){
            americana()

        //INOVA
        } else if(diaPlantao == 5){
            inova()

        //OBEDIENCIA
        } else if(diaPlantao == 6){
            nsObediencia()

        //STA TEREZINHA
        } else if(diaPlantao == 25 || diaPlantao == 19 || diaPlantao == 18){
            staTerezinha()

        //DIAS SEM PLANTAO
        } else {
            nomeDrogaria.innerHTML = '<h4> Horário normal de funcionamento! </h4>'
            whatsapp.href = ''
            plantaoAte.innerHTML = ' '
        }

    }

    function relogioTempoReal(){
    const zeroFill = n => {
        return ('0' + n).slice(-2);
    }

    // Cria intervalo
    const interval = setInterval(() => {
        // Pega o horário atual
        const now = new Date();

        // Formata a data conforme dd/mm/aaaa hh:ii:ss
        const dataHora = `${zeroFill(now.getHours())} horas ${zeroFill(now.getMinutes())} minutos ${zeroFill(now.getSeconds())} segundos` 

        // Exibe na tela usando a div#data-hora
        horaAtual.innerHTML = dataHora;
    }, 1000);
}

relogioTempoReal()

    
    // nomeDrogaria.innerHTML = `${diaPlantao} eeee ${mesPlantao}`
    // nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'

    

    // let goodMorning = horario > 6 && horario < 12
    // let goodAfternoon = horario >= 12 && horario < 18
    // let goodNight = horario >= 18

    // if (goodMorning){
    //     saudacao.innerHTML = '<h1>Bom dia</h1>'
    //     msg.innerHTML = `Agora são ${horario} horas`
    //     img.src = "imagens/manha.png"
    //     document.body.style.background = 'yellow'

    // } else if(goodAfternoon){
    //     saudacao.innerHTML = 'Boa tarde'
    //     msg.innerHTML = `Agora são ${horario} horas`
    //     img.src = "imagens/tarde.png"
    //     document.body.style.background = 'green'

    // } else {
    //     saudacao.innerHTML = 'Boa noite'
    //     msg.innerHTML = `Agora são ${horario} horas`
    //     img.src = "imagens/noite.png"
    //     document.body.style.background = 'blue'
    // }

}

