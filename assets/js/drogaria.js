function carregar(){
 
    let nomeDrogaria = document.getElementById('nomeDrogaria')
    let dataAtual = document.getElementById('dataAtual')
    let whatsapp = document.getElementById('whatsapp')
    let horaAtual = document.getElementById('horaAtual')
    let plantaoAte = document.getElementById('plantaoAte')

    let data = new Date()
    dataAtual.innerHTML = data.toLocaleString('pt-Br', {dateStyle: 'full'})
    let diaPlantao = data.getDate()
    let mesPlantao = data.getMonth() + 1



    //JANEIRO
    if(mesPlantao == 1){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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

    //FEVEREIRO
    if(mesPlantao == 2){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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

    //MARÇO
    if(mesPlantao == 3){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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

    //ABRIL
    if(mesPlantao == 4){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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

    //MAIO
    if(mesPlantao == 5){
        //AMERICANA
        if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8 || diaPlantao == 8){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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
        if(diaPlantao == 8 || diaPlantao == 10 || diaPlantao == 10 || diaPlantao == 10){
            nomeDrogaria.innerHTML = '<h4> AMERICANA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //INOVA
        } else if(diaPlantao == 9 || diaPlantao == 9 || diaPlantao == 9 || diaPlantao == 9){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //OBEDIENCIA
        } else if(diaPlantao == 9 || diaPlantao == 9 || diaPlantao == 9 || diaPlantao == 9){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

        //STA TEREZINHA
        } else if(diaPlantao == 9 || diaPlantao == 9 || diaPlantao == 9 || diaPlantao == 9){
            nomeDrogaria.innerHTML = '<h4> DROGARIA N.S OBEDIÊNCIA </h4>'
            whatsapp.href = 'https://www.google.com/'

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

