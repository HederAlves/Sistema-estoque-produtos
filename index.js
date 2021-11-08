
import { CadastroComponet } from "./controller/cadastro.js";
import { ListaProdutosComponent } from "./controller/listaProdutos.js";

const link = document.getElementById('link')

link.addEventListener('click', (event) => {
    const option = event.path[0].innerText

    switch(option) {
        case "Cadastro":
            CadastroComponet();
            break
        case"Produtos":
        ListaProdutosComponent();
    }
})
