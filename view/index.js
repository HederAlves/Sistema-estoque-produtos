
const getcadastroHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `<form id="formulario">
    <h1>Novo Produto</h1>
    <label>Produto</label>
    <input id="name" type="text" placeholder="Digite o nome do produto">
    <br><br>
    <label>Marca</label>
    <input id="marca" type="text" placeholder="Digite a marca do produto">
    <br><br>
    <label>Quantidade</label>
    <input id="quantidade" type="number">
    <br><br>
    <select id="tipo" class="tipo"  placeholder="Digite o tipo do produto">
        <option value="1" >Perecível</option>
        <option value="2" >Objeto</option>
    </select>
    <br><br>
    <label>Código</label>
    <input id="codigo" type="text" placeholder="Digite o código do produto">
    <br><br>
    <label>Observações</label>
    <input id="observacoes" type="text" placeholder="Digite a observação">
    <br><br>
    <div>
        <button id="cancelar" type="button">Cancelar</button>
        <button id="salvar" type="submit">Salvar</button>
    </div>
    </form>`

    main.innerHTML = dadosHtml
}

const getListaProdutosHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
        <section>
            <h1>Lista de Produtos</h1>
            <table id="tbody">
            <tr>
                <th>Nome</th>
                <th>Marca</th>
                <th>Quantidade</th>
                <th class="tipo">Tipo</th>
                <th>Código</th>
                <th>Observações</th>
            </tr>
            </table>
        </section> `

        main.innerHTML = dadosHtml
}

export const view = {
    getcadastroHtml,
    getListaProdutosHtml
}
