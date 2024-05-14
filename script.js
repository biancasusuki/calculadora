const resultado = document.querySelector('.resultado')
const confirmar = document.querySelector('.calc_botao_res')

let

function insert( valor ){
    resultado.innerHTML += valor;
}
function clean(){
    resultado.innerHTML = ""
}
function confirma(){
    if(resultado.textContent != 'Erro'){
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}