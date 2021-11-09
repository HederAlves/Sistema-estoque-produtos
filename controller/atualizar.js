import { service } from "../service/index.js"
import { view } from "../view/index.js"
import { ListaProdutosComponent } from "./listaProdutos.js"

export const AtualizaComponent = (idParametro) => {
    view.getAtualizaHtml()
    
    service.getProdutos().then((dados) => {
        dados.forEach(element => {
            if(element.id == idParametro){
                adicionaParametroNoInput(element)
            }
        });
    })

    const formulario = document.getElementById("formulario")
    formulario.addEventListener('submit', function(event) {
        event.preventDefault()
        
        const atualizaProdutos = {
            name: document.getElementById('name').value,
            mark: document.getElementById('marca').value,
            quantity: document.getElementById('quantidade').value,
            type: document.getElementById('tipo').value,
            code: document.getElementById('codigo').value,
            observation: document.getElementById('observacoes').value
        }
        
        service.putProdutos(atualizaProdutos, idParametro).then(() => {
            cancelar(),
            ListaProdutosComponent();
        })
    })
}

const adicionaParametroNoInput = (objeto) => {

    document.getElementById('name').value = objeto.name
    document.getElementById('marca').value = objeto.mark
    document.getElementById('quantidade').value = objeto.quantity
    document.getElementById('tipo').value = objeto.type
    document.getElementById('codigo').value = objeto.code
    document.getElementById('observacoes').value = objeto.observation
}


export const cancelar = () => {
    const formulario = document.getElementById("formulario");
    formulario.reset();
}
