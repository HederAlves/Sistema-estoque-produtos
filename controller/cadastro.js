import { service } from "../service/index.js"
import { view } from "../view/index.js"

export const CadastroComponet = () => {
    view.getcadastroHtml();
    
    const formulario = document.getElementById("formulario")
    formulario.addEventListener('submit', function(event) {
        event.preventDefault()
        
        const cadastroProdutos = {
            name: document.getElementById('name').value,
            mark: document.getElementById('marca').value,
            quantity: document.getElementById('quantidade').value,
            type: document.getElementById('tipo').value,
            code: document.getElementById('codigo').value,
            observation: document.getElementById('observacoes').value
        }
       service.postProdutos(cadastroProdutos)
    })
}
