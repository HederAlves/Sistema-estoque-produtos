export const view = {
    getcadastroHtml,
    getListaProdutosHtml
}

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
    <select id="tipo" type="text" placeholder="Digite o tipo do produto">
        <option value="1">Perecível</option>
        <option value="0">Objeto</option>
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
            <h1>Lista de Clientes</h1>
            <table id="tbody">
            <tr>
                <th>Nome</th>
                <th>Marca</th>
                <th>Quantidade</th>
                <th>Tipo</th>
                <th>Código</th>
                <th>Observações</th>
                <th>Editar</th>
                <th>Excluir</th>
                <th>Novo</th>
            </tr>
            </table>
        </section> `

        main.innerHTML = dadosHtml
}
