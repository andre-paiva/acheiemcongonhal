 //Atualiza a página de 1 em 1 minuto
//  setTimeout(function() {
//      window.location.reload(1);
//    }, 6000);

let idaPousoAlegre = document.getElementById('idaPousoAlegre')
let idaCongonhal = document.getElementById('idaCongonhal')

const option = { weekday: 'long'}
const locale = 'pt-br'
const diaDaSemana = new Date().toLocaleDateString( locale, option)

let date = new Date()
let horas = ('0'+ date.getHours()).slice(-2);
let minutos =('0'+ date.getMinutes()).slice(-2);
let horario = `${horas}:${minutos}`

// //LOGICA DE HORARIOS SEGUNDA A DOMINGO


function idaParaPousoAlegre(){

if(diaDaSemana == 'seguna-feira' || diaDaSemana == 'terça-feira' || diaDaSemana == 'quarta-feira' || diaDaSemana == 'quinta-feira' || diaDaSemana == 'sexta-feira'){

let umDoDia           = horario < '04:40'   &&  horario > '20:00' 
let doisDoDia         = horario < '05:50'   &&  horario > '04:40'  
let tresDoDia         = horario < '06:00'    &&  horario > '05:50' 
let quatroDoDia       = horario < '06:30'   &&  horario > '06:00'  
let cincoDoDia        = horario < '07:00'    &&  horario > '06:30' 
let seisDoDia         = horario < '07:15'   &&  horario > '07:00'  
let seteDoDia         = horario < '07:30'   &&  horario > '07:15'  
let oitoDoDia         = horario < '08:00'    &&  horario > '07:30' 
let noveDoDia         = horario < '08:50'   &&  horario > '08:00'  
let dezDoDia          = horario < '09:30'   &&  horario > '08:50' 
let onzeDoDia         = horario < '11:15'   &&  horario > '09:30'  
let dozeDoDia         =  horario < '12:00'   &&  horario > '11:15' 
let trezeDoDia        =  horario < '13:00'   &&  horario > '12:00' 
let quatorzeDoDia     =  horario < '14:00'   &&  horario > '13:00' 
let quinzeDoDia       =  horario < '14:50'  &&  horario > '14:00'  
let dezesseisDoDia    =  horario < '15:15'  &&  horario > '14:50' 
let dezesseteDoDia    =  horario < '15:40'  &&  horario > '15:15' 
let dezoitoDoDia      =  horario < '16:30'  &&  horario > '15:40' 
let dezenoveDoDia     =  horario < '17:00'   &&  horario > '16:30' 
let vinteDoDia        =  horario < '17:20'  &&  horario > '17:00'  
let vinteUmDoDia      =  horario < '18:15'  &&  horario > '17:20' 
let vinteDoisDoDia    =  horario < '20:00'   &&  horario > '18:15'

    if (umDoDia)  idaPousoAlegre.innerHTML = '04:40' //segunda a sabado
    if (doisDoDia)  idaPousoAlegre.innerHTML = '05:50'// segunda a sexta
    if (tresDoDia)  idaPousoAlegre.innerHTML = '06:00'// segunda a domingo
    if (quatroDoDia)  idaPousoAlegre.innerHTML = '06:30'// segunda a sabado
    if (cincoDoDia)  idaPousoAlegre.innerHTML = '07:00'//segunda a sexta
    if (seisDoDia)  idaPousoAlegre.innerHTML = '07:15'//segunda a sabado
    if (seteDoDia)  idaPousoAlegre.innerHTML = '07:30'//segunda a sexta
    if (oitoDoDia)  idaPousoAlegre.innerHTML = '08:00'//segunda a domingo
    if (noveDoDia)  idaPousoAlegre.innerHTML = '08:50'//segunda a sabado
    if (dezDoDia)  idaPousoAlegre.innerHTML = '09:30'//segunda a domingo
    if (onzeDoDia)  idaPousoAlegre.innerHTML = '11:15'//segunda a sabado
    if (dozeDoDia)  idaPousoAlegre.innerHTML = '12:00'// segunda a sabado
    if (trezeDoDia)  idaPousoAlegre.innerHTML = '13:00'//segunda a domingo
    if (quatorzeDoDia)  idaPousoAlegre.innerHTML = '14:00'//segunda a sabado
    if (quinzeDoDia)  idaPousoAlegre.innerHTML = '14:50'// segunda a domingo
    if (dezesseisDoDia)  idaPousoAlegre.innerHTML = '15:15'//segunda a sexta
    if (dezesseteDoDia)  idaPousoAlegre.innerHTML = '15:40'//segunda a sabado
    if (dezoitoDoDia)  idaPousoAlegre.innerHTML = '16:30'// segunda a domingo
    if (dezenoveDoDia)  idaPousoAlegre.innerHTML = '17:00'// segunda a sexta
    if (vinteDoDia)  idaPousoAlegre.innerHTML = '17:20'// segunda a sabado
    if (vinteUmDoDia)  idaPousoAlegre.innerHTML = '18:15'// segunda a domingo
    if (vinteDoisDoDia)  idaPousoAlegre.innerHTML = '20:00'//segunda a domingo

} else if(diaDaSemana == 'sábado'){

    let umDoSabado      =  horario < '04:40'   &&  horario > '20:00'
    let doisDoSabado    =  horario < '06:00'   &&  horario > '04:40'
    let tresDoSabado    =  horario < '06:30'   &&  horario > '06:00'
    let quatroDoSabado    =  horario < '07:15'   &&  horario > '06:30'
    let cincoDoSabado    =  horario < '08:00'   &&  horario > '07:15'
    let seisDoSabado    =  horario < '08:50'   &&  horario > '08:00'
    let seteDoSabado    =  horario < '09:30'   &&  horario > '08:50'
    let oitoDoSabado    =  horario < '11:15'   &&  horario > '09:30'
    let noveDoSabado    =  horario < '12:00'   &&  horario > '11:15'
    let dezDoSabado    =  horario < '13:00'   &&  horario > '12:00'
    let onzeDoSabado    =  horario < '14:00'   &&  horario > '13:00'
    let dozeDoSabado    =  horario < '14:50'   &&  horario > '14:00'
    let trezeDoSabado    =  horario < '15:40'   &&  horario > '14:00'
    let quatorzeDoSabado    =  horario < '16:30'   &&  horario > '14:50'
    let quinzeDoSabado    =  horario < '17:20'   &&  horario > '16:30'
    let dezesseisDoSabado    =  horario < '18:15'   &&  horario > '17:20'
    let dezesseteDoSabado    =  horario < '20:00'   &&  horario > '18:15'
    
    if (umDoSabado)  idaPousoAlegre.innerHTML = '04:40' //segunda a sabado
    if (doisDoSabado)  idaPousoAlegre.innerHTML = '06:00'// segunda a domingo
    if (tresDoSabado)  idaPousoAlegre.innerHTML = '06:30'// segunda a sabado
    if (quatroDoSabado)  idaPousoAlegre.innerHTML = '07:15'//segunda a sabado
    if (cincoDoSabado)  idaPousoAlegre.innerHTML = '08:00'//segunda a domingo
    if (seisDoSabado)  idaPousoAlegre.innerHTML = '08:50'//segunda a sabado
    if (seteDoSabado)  idaPousoAlegre.innerHTML = '09:30'//segunda a domingo
    if (oitoDoSabado)  idaPousoAlegre.innerHTML = '11:15'//segunda a sabado
    if (noveDoSabado)  idaPousoAlegre.innerHTML = '12:00'// segunda a sabado
    if (dezDoSabado)  idaPousoAlegre.innerHTML = '13:00'//segunda a domingo
    if (onzeDoSabado)  idaPousoAlegre.innerHTML = '14:00'//segunda a sabado
    if (dozeDoSabado)  idaPousoAlegre.innerHTML = '14:50'// segunda a domingo
    if (trezeDoSabado)  idaPousoAlegre.innerHTML = '15:40'//segunda a sabado
    if (quatorzeDoSabado)  idaPousoAlegre.innerHTML = '16:30'// segunda a domingo
    if (quinzeDoSabado)  idaPousoAlegre.innerHTML = '17:20'// segunda a sabado
    if (dezesseisDoSabado)  idaPousoAlegre.innerHTML = '18:15'// segunda a domingo
    if (dezesseteDoSabado)  idaPousoAlegre.innerHTML = '20:00'//segunda a domingo

} else if(diaDaSemana == 'domingo'){
    let umDomingo =     horario < '06:00'   &&  horario > '20:00'
    let doisDomingo =   horario < '08:00'   &&  horario > '06:00'
    let tresDomingo =   horario < '09:30'   &&  horario > '08:00'
    let quatroDomingo = horario < '13:00'   &&  horario > '09:30'
    let cincoDomingo =  horario < '14:50'   &&  horario > '13:00'
    let seisDomingo =   horario < '16:30'   &&  horario > '14:50'
    let seteDomingo =   horario < '18:15'   &&  horario > '16:30'
    let oitoDomingo =   horario < '20:00'   &&  horario > '18:15'


    if (umDomingo)  idaPousoAlegre.innerHTML = '06:00'// segunda a domingo
    if (doisDomingo)  idaPousoAlegre.innerHTML = '08:00'//segunda a domingo
    if (tresDomingo)  idaPousoAlegre.innerHTML = '09:30'//segunda a domingo
    if (quatroDomingo)  idaPousoAlegre.innerHTML = '13:00'//segunda a domingo
    if (cincoDomingo)  idaPousoAlegre.innerHTML = '14:50'// segunda a domingo
    if (seisDomingo)  idaPousoAlegre.innerHTML = '16:30'// segunda a domingo
    if (seteDomingo)  idaPousoAlegre.innerHTML = '18:15'// segunda a domingo
    if (oitoDomingo)  idaPousoAlegre.innerHTML = '20:00'//segunda a domingo
} else{
    idaPousoAlegre.innerHTML = 'Indisponível'
}
}
idaParaPousoAlegre()




function idaParaCongonhal(){

    if(diaDaSemana == 'seguna-feira' || diaDaSemana == 'terça-feira' || diaDaSemana == 'quarta-feira' || diaDaSemana == 'quinta-feira' || diaDaSemana == 'sexta-feira'){
    
    let umDoDiaPA           = horario < '05:15'   &&  horario > '21:30' 
    let doisDoDiaPA         = horario < '06:30'   &&  horario > '05:15'  
    let tresDoDiaPA         = horario < '06:40'    &&  horario > '06:30' 
    let quatroDoDiaPA       = horario < '07:15'   &&  horario > '06:40'  
    let cincoDoDiaPA        = horario < '08:00'    &&  horario > '07:15' 
    let seisDoDiaPA         = horario < '08:50'   &&  horario > '08:00'  
    let seteDoDiaPA         = horario < '09:20'   &&  horario > '08:50'  
    let oitoDoDiaPA         = horario < '09:30'    &&  horario > '09:20' 
    let noveDoDiaPA         = horario < '11:15'   &&  horario > '09:30'  
    let dezDoDiaPA          = horario < '12:00'   &&  horario > '11:15' 
    let onzeDoDiaPA         = horario < '13:10'   &&  horario > '12:00'  
    let dozeDoDiaPA         =  horario < '14:00'   &&  horario > '13:10' 
    let trezeDoDiaPA        =  horario < '14:50'   &&  horario > '14:00' 
    let quatorzeDoDiaPA     =  horario < '15:40'   &&  horario > '14:50' 
    let quinzeDoDiaPA       =  horario < '16:15'  &&  horario > '15:40'  
    let dezesseisDoDiaPA    =  horario < '16:40'  &&  horario > '16:15' 
    let dezesseteDoDiaPA    =  horario < '17:00'  &&  horario > '16:40' 
    let dezoitoDoDiaPA      =  horario < '17:30'  &&  horario > '17:00' 
    let dezenoveDoDiaPA     =  horario < '18:00'   &&  horario > '17:30' 
    let vinteDoDiaPA        =  horario < '18:15'  &&  horario > '18:00'  
    let vinteUmDoDiaPA      =  horario < '19:15'  &&  horario > '18:15' 
    let vinteDoisDoDiaPA    =  horario < '21:30'   &&  horario > '19:15'
    
        if (umDoDiaPA)  idaCongonhal.innerHTML = '05:15' //segunda a sabado
        if (doisDoDiaPA)  idaCongonhal.innerHTML = '06:30' // segunda a sexta
        if (tresDoDiaPA)  idaCongonhal.innerHTML = '06:40'// segunda a domingo
        if (quatroDoDiaPA)  idaCongonhal.innerHTML = '07:15'// segunda a sabado
        if (cincoDoDiaPA)  idaCongonhal.innerHTML = '08:00'//segunda a sexta
        if (seisDoDiaPA)  idaCongonhal.innerHTML = '08:50'//segunda a sabado
        if (seteDoDiaPA)  idaCongonhal.innerHTML = '09:20'//segunda a sexta
        if (oitoDoDiaPA)  idaCongonhal.innerHTML = '09:30'//segunda a domingo
        if (noveDoDiaPA)  idaCongonhal.innerHTML = '11:15'//segunda a sabado
        if (dezDoDiaPA)  idaCongonhal.innerHTML = '12:00'//segunda a domingo
        if (onzeDoDiaPA)  idaCongonhal.innerHTML = '13:10'//segunda a sabado
        if (dozeDoDiaPA)  idaCongonhal.innerHTML = '14:00'// segunda a sabado
        if (trezeDoDiaPA)  idaCongonhal.innerHTML = '14:50'//segunda a domingo
        if (quatorzeDoDiaPA)  idaCongonhal.innerHTML = '15:40'//segunda a sabado
        if (quinzeDoDiaPA)  idaCongonhal.innerHTML = '16:15'// segunda a domingo
        if (dezesseisDoDiaPA)  idaCongonhal.innerHTML = '16:40'//segunda a sexta
        if (dezesseteDoDiaPA)  idaCongonhal.innerHTML = '17:00'//segunda a sabado
        if (dezoitoDoDiaPA)  idaCongonhal.innerHTML = '17:30'// segunda a domingo
        if (dezenoveDoDiaPA)  idaCongonhal.innerHTML = '18:00'// segunda a sexta
        if (vinteDoDiaPA)  idaCongonhal.innerHTML = '18:15'// segunda a sabado
        if (vinteUmDoDiaPA)  idaCongonhal.innerHTML = '19:15'// segunda a domingo
        if (vinteDoisDoDiaPA)  idaCongonhal.innerHTML = '21:30'//segunda a domingo
    
    } else if(diaDaSemana == 'sábado'){
    
        let umDoSabadoPA      =  horario < '05:15'   &&  horario > '21:30' 
        let doisDoSabadoPA    =  horario < '06:40'   &&  horario > '05:15'
        let tresDoSabadoPA    =  horario < '07:15'   &&  horario > '06:40'
        let quatroDoSabadoPA    =  horario < '08:00'   &&  horario > '07:15'
        let cincoDoSabadoPA    =  horario < '08:50'   &&  horario > '08:00'
        let seisDoSabadoPA    =  horario < '09:30'   &&  horario > '08:50'
        let seteDoSabadoPA    =  horario < '11:15'   &&  horario > '09:30'
        let oitoDoSabadoPA    =  horario < '12:00'   &&  horario > '11:15'
        let noveDoSabadoPA    =  horario < '13:10'   &&  horario > '12:00'
        let dezDoSabadoPA    =  horario < '14:00'   &&  horario > '13:10'
        let onzeDoSabadoPA    =  horario < '14:50'   &&  horario > '14:00'
        let dozeDoSabadoPA    =  horario < '15:40'   &&  horario > '14:50'
        let trezeDoSabadoPA    =  horario < '16:40'   &&  horario > '15:40'
        let quatorzeDoSabadoPA    =  horario < '17:30'   &&  horario > '16:40'
        let quinzeDoSabadoPA    =  horario < '18:15'   &&  horario > '17:30'
        let dezesseisDoSabadoPA    =  horario < '19:15'   &&  horario > '18:15'
        let dezesseteDoSabadoPA    =  horario < '21:30'   &&  horario > '19:15'
        
        if (umDoSabadoPA)  idaCongonhal.innerHTML = '05:15' //segunda a sabadoPA
        if (doisDoSabadoPA)  idaCongonhal.innerHTML = '06:40'// segunda a domingo
        if (tresDoSabadoPA)  idaCongonhal.innerHTML = '07:15'// segunda a sabadoPA
        if (quatroDoSabadoPA)  idaCongonhal.innerHTML = '08:00'//segunda a sabadoPA
        if (cincoDoSabadoPA)  idaCongonhal.innerHTML = '08:50'//segunda a domingo
        if (seisDoSabadoPA)  idaCongonhal.innerHTML = '09:30'//segunda a sabadoPA
        if (seteDoSabadoPA)  idaCongonhal.innerHTML = '11:15'//segunda a domingo
        if (oitoDoSabadoPA)  idaCongonhal.innerHTML = '12:00'//segunda a sabadoPA
        if (noveDoSabadoPA)  idaCongonhal.innerHTML = '13:10'// segunda a sabadoPA
        if (dezDoSabadoPA)  idaCongonhal.innerHTML = '14:00'//segunda a domingo
        if (onzeDoSabadoPA)  idaCongonhal.innerHTML = '14:50'//segunda a sabadoPA
        if (dozeDoSabadoPA)  idaCongonhal.innerHTML = '15:40'// segunda a domingo
        if (trezeDoSabadoPA)  idaCongonhal.innerHTML = '16:40'//segunda a sabadoPA
        if (quatorzeDoSabadoPA)  idaCongonhal.innerHTML = '17:30'// segunda a domingo
        if (quinzeDoSabadoPA)  idaCongonhal.innerHTML = '18:15'// segunda a sabadoPA
        if (dezesseisDoSabadoPA)  idaCongonhal.innerHTML = '19:15'// segunda a domingo
        if (dezesseteDoSabadoPA)  idaCongonhal.innerHTML = '21:30'//segunda a domingo
    
    } else if(diaDaSemana == 'domingo'){
        let umDomingoPA =     horario < '07:15'   &&  horario > '21:30'
        let doisDomingoPA =   horario < '08:50'   &&  horario > '07:15'
        let tresDomingoPA =   horario < '11:15'   &&  horario > '08:00'
        let quatroDomingoPA = horario < '14:00'   &&  horario > '11:15'
        let cincoDomingoPA =  horario < '15:40'   &&  horario > '14:00'
        let seisDomingoPA =   horario < '17:30'   &&  horario > '15:40'
        let seteDomingoPA =   horario < '19:15'   &&  horario > '17:30'
        let oitoDomingoPA =   horario < '21:30'   &&  horario > '19:15'
    
    
        if (umDomingoPA)  idaCongonhal.innerHTML = '07:15'// segunda a domingoPA
        if (doisDomingoPA)  idaCongonhal.innerHTML = '08:50'//segunda a domingoPA
        if (tresDomingoPA)  idaCongonhal.innerHTML = '11:15'//segunda a domingoPA
        if (quatroDomingoPA)  idaCongonhal.innerHTML = '14:00'//segunda a domingoPA
        if (cincoDomingoPA)  idaCongonhal.innerHTML = '15:40'// segunda a domingoPA
        if (seisDomingoPA)  idaCongonhal.innerHTML = '17:30'// segunda a domingoPA
        if (seteDomingoPA)  idaCongonhal.innerHTML = '19:15'// segunda a domingoPA
        if (oitoDomingoPA)  idaCongonhal.innerHTML = '21:30'//segunda a domingo
    } else{
        idaCongonhal.innerHTML = 'Indisponível'
    }
}
idaParaCongonhal()


// //HORARIO DE SEGUNDA A SEXTA
// if(segASex){
//     if (umDoDia)  idaPousoAlegre.innerHTML = '04:40' //segunda a sabado
//     if (doisDoDia)  idaPousoAlegre.innerHTML = '05:50'// segunda a sexta
//     if (tresDoDia)  idaPousoAlegre.innerHTML = '06:00'// segunda a domingo
//     if (quatroDoDia)  idaPousoAlegre.innerHTML = '06:30'// segunda a sabado
//     if (cincoDoDia)  idaPousoAlegre.innerHTML = '07:00'//segunda a sexta
//     if (seisDoDia)  idaPousoAlegre.innerHTML = '07:15'//segunda a sabado
//     if (seteDoDia)  idaPousoAlegre.innerHTML = '07:30'//segunda a sexta
//     if (oitoDoDia)  idaPousoAlegre.innerHTML = '08:00'//segunda a domingo
//     if (noveDoDia)  idaPousoAlegre.innerHTML = '08:50'//segunda a sabado
//     if (dezDoDia)  idaPousoAlegre.innerHTML = '09:30'//segunda a domingo
//     if (onzeDoDia)  idaPousoAlegre.innerHTML = '11:15'//segunda a sabado
//     if (dozeDoDia)  idaPousoAlegre.innerHTML = '12:00'// segunda a sabado
//     if (trezeDoDia)  idaPousoAlegre.innerHTML = '13:00'//segunda a domingo
//     if (quatorzeDoDia)  idaPousoAlegre.innerHTML = '14:00'//segunda a sabado
//     if (quinzeDoDia)  idaPousoAlegre.innerHTML = '14:50'// segunda a domingo
//     if (dezesseisDoDia)  idaPousoAlegre.innerHTML = '15:15'//segunda a sexta
//     if (dezesseteDoDia)  idaPousoAlegre.innerHTML = '15:40'//segunda a sabado
//     if (dezoitoDoDia)  idaPousoAlegre.innerHTML = '16:30'// segunda a domingo
//     if (dezenoveDoDia)  idaPousoAlegre.innerHTML = '17:00'// segunda a sexta
//     if (vinteDoDia)  idaPousoAlegre.innerHTML = '17:20'// segunda a sabado
//     if (vinteUmDoDia)  idaPousoAlegre.innerHTML = '18:15'// segunda a domingo
//     if (vinteDoisDoDia)  idaPousoAlegre.innerHTML = '20:00'//segunda a domingo
    
//    }

//     if(diaDaSemana == 'sábado'){
//     if (umDoDia)  idaPousoAlegre.innerHTML = '04:40' //segunda a sabado
//     if (tresDoDia)  idaPousoAlegre.innerHTML = '06:00'// segunda a domingo
//     if (quatroDoDia)  idaPousoAlegre.innerHTML = '06:30'// segunda a sabado
//     if (seisDoDia)  idaPousoAlegre.innerHTML = '07:15'//segunda a sabado
//     if (oitoDoDia)  idaPousoAlegre.innerHTML = '08:00'//segunda a domingo
//     if (noveDoDia)  idaPousoAlegre.innerHTML = '08:50'//segunda a sabado
//     if (dezDoDia)  idaPousoAlegre.innerHTML = '09:30'//segunda a domingo
//     if (onzeDoDia)  idaPousoAlegre.innerHTML = '11:15'//segunda a sabado
//     if (dozeDoDia)  idaPousoAlegre.innerHTML = '12:00'// segunda a sabado
//     if (trezeDoDia)  idaPousoAlegre.innerHTML = '13:00'//segunda a domingo
//     if (quatorzeDoDia)  idaPousoAlegre.innerHTML = '14:00'//segunda a sabado
//     if (quinzeDoDia)  idaPousoAlegre.innerHTML = '14:50'// segunda a domingo
//     if (dezesseteDoDia)  idaPousoAlegre.innerHTML = '15:40'//segunda a sabado
//     if (dezoitoDoDia)  idaPousoAlegre.innerHTML = '16:30'// segunda a domingo
//     if (vinteDoDia)  idaPousoAlegre.innerHTML = '17:20'// segunda a sabado
//     if (vinteUmDoDia)  idaPousoAlegre.innerHTML = '18:15'// segunda a domingo
//     if (vinteDoisDoDia)  idaPousoAlegre.innerHTML = '20:00'//segunda a domingo

//    }

//     if(diaDaSemana == 'domingo'){
//     if (tresDoDia)  idaPousoAlegre.innerHTML = '06:00'// segunda a domingo
//     if (oitoDoDia)  idaPousoAlegre.innerHTML = '08:00'//segunda a domingo
//     if (dezDoDia)  idaPousoAlegre.innerHTML = '09:30'//segunda a domingo
//     if (trezeDoDia)  idaPousoAlegre.innerHTML = '13:00'//segunda a domingo
//     if (quinzeDoDia)  idaPousoAlegre.innerHTML = '14:50'// segunda a domingo
//     if (dezoitoDoDia)  idaPousoAlegre.innerHTML = '16:30'// segunda a domingo
//     if (vinteUmDoDia)  idaPousoAlegre.innerHTML = '18:15'// segunda a domingo
//     if (vinteDoisDoDia)  idaPousoAlegre.innerHTML = '20:00'//segunda a domingo
//    }


    // if (umDoDia)  idaPousoAlegre.innerHTML = '04:40' //segunda a sabado
    // if (doisDoDia)  idaPousoAlegre.innerHTML = '05:50'// segunda a sexta
    // if (tresDoDia)  idaPousoAlegre.innerHTML = '06:00'// segunda a domingo
    // if (quatroDoDia)  idaPousoAlegre.innerHTML = '06:30'// segunda a sabado
    // if (cincoDoDia)  idaPousoAlegre.innerHTML = '07:00'//segunda a sexta
    // if (seisDoDia)  idaPousoAlegre.innerHTML = '07:15'//segunda a sabado
    // if (seteDoDia)  idaPousoAlegre.innerHTML = '07:30'//segunda a sexta
    // if (oitoDoDia)  idaPousoAlegre.innerHTML = '08:00'//segunda a domingo
    // if (noveDoDia)  idaPousoAlegre.innerHTML = '08:50'//segunda a sabado
    // if (dezDoDia)  idaPousoAlegre.innerHTML = '09:30'//segunda a domingo
    // if (onzeDoDia)  idaPousoAlegre.innerHTML = '11:15'//segunda a sabado
    // if (dozeDoDia)  idaPousoAlegre.innerHTML = '12:00'// segunda a sabado
    // if (trezeDoDia)  idaPousoAlegre.innerHTML = '13:00'//segunda a domingo
    // if (quatorzeDoDia)  idaPousoAlegre.innerHTML = '14:00'//segunda a sabado
    // if (quinzeDoDia)  idaPousoAlegre.innerHTML = '14:50'// segunda a domingo
    // if (dezesseisDoDia)  idaPousoAlegre.innerHTML = '15:15'//segunda a sexta
    // if (dezesseteDoDia)  idaPousoAlegre.innerHTML = '15:40'//segunda a sabado
    // if (dezoitoDoDia)  idaPousoAlegre.innerHTML = '16:30'// segunda a domingo
    // if (dezenoveDoDia)  idaPousoAlegre.innerHTML = '17:00'// segunda a sexta
    // if (vinteDoDia)  idaPousoAlegre.innerHTML = '17:20'// segunda a sabado
    // if (vinteUmDoDia)  idaPousoAlegre.innerHTML = '18:15'// segunda a domingo
    // if (vinteDoisDoDia)  idaPousoAlegre.innerHTML = '20:00'//segunda a domingo


// idaPousoAlegre.innerHTML = diaDaSemana


carregaOnibus()
