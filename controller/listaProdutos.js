
import { service } from "../service/index.js"
import { view } from "../view/index.js"

export const ListaProdutosComponent = () => {
    view.getListaProdutosHtml()

    service.getProdutos().then((dados) => {
        dados.forEach((element) => {
            if(element.name != null && element.code != null){
                criarNovaLinha(element.name, element.mark, element.quantity, element.type, element.code, element.observation, element.id)
            }
        });
    })

    const table = document.getElementById('tbody')
    table.addEventListener('click', (event)=> {
        const button = event.path[0].innerText
        
        if(button === 'Editar') {
        
        }
        if(button === 'Excluir') {
           
        }
        if(button === 'Novo') {
            
        }
    })
}



const criarNovaLinha = (produto, marca, quantidade, tipo, codigo, observacoes, id) => {
    const table = document.getElementById('tbody')
    const NovaLinha = document.createElement('tr')
    const dadosHtml = `
        <td class="none">${produto}</td>
        <td>${marca}</td>
        <td>${quantidade}</td>
        <td class="none">${tipo}</td>
        <td class="none">${codigo}</td>
        <td class="none">${observacoes}</td>
            <div class="lista-btn">
                <a id="${id}" class="btn-link editar" >Editar</a>
                <a id="${id}" class="btn-link type" >Excluir</a>
            </div>        
        </td>
        `
    NovaLinha.innerHTML = dadosHtml
    return table.appendChild(NovaLinha)
}
