const form = document.querySelector('.formulario-fale-conosco')
const mascara = document.querySelector('.mascara-formulario')

function cliqueiNoBotao(){
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
    mascara.style.visibility = 'visible'
}

function cliqueiFora(){
    form.style.left = '-300px'
    mascara.style.visibility = 'hidden'
}