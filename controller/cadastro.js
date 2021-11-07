import { view } from "../view/index.js"

export const CadastroComponet = () => {
    view.getcadastroHtml();
    
    const formulario = document.getElementById("formulario")
    formulario.addEventListener('submit', function(event) {
        event.preventDefault()
        
        const cadastroCliente = {
            owner: document.getElementById('name').value,
            model: document.getElementById('marca').value,
            type: document.getElementById('tipo').value,
            label: document.getElementById('codigo').value,
            observation: document.getElementById('observacoes').value
        }
    })
}
