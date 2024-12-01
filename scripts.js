/* Lógica de programação:
 [] Saber quando o usuário clicou no botão
 [] Mudar o posicionamento do modal
 [] Fazer a máscara ficar visível
 [] Quando clicar na máscara, fechar o modal
 */

 const modal = document.querySelector(".modal")
 const mascara = document.querySelector(".mascara-modal")


function mostrarModal(){
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function esconderModal(){
   modal.style.left = '-320%'
    mascara.style.visibility = 'hidden'
}

