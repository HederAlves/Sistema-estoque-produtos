import { view } from "../view/index.js"

export const ListaProdutosComponent = () => {
    view.getListaProdutosHtml()
    
    const table = document.getElementById('tbody')
    table.addEventListener('click', (event)=> {
        const button = event.path[0].innerText
        
        if(button === 'Editar') {
            console.log(button)
        }
        if(button === 'Excluir') {
            console.log(button)
        }
        if(button === 'Novo') {
            console.log(button)
        }
    })
}
