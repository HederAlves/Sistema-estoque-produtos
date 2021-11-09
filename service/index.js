//-----------EXPORT------------
export const service = {
    postProdutos,
    getProdutos,
    putProdutos,
    deletarProduto
}

const url = "http://localhost:8000/api"

//------------post-------------------------------
const postProdutos = (objetoProdutos) => {
    console.log("objetoProdutos: ", objetoProdutos)

    return fetch(url + "/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoProdutos)
    }).then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor: ${response.status}`)
        }else {
            alert(`Sucesso ao salvar: ${response.status}`)
        }
    })
}

//----------------GET------------------------
const getProdutos = () => {
    return fetch(url + "/products")
    .then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor: ${response.status}`)
        }else {
            return response.json()
        }
    })
}

//---------------PUT---------------

const putProdutos = (objetoProduto, id) => {
    return fetch(`${url}/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objetoProduto)
    }).then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor: ${response.status}`)
        }else {
            return response.json()
        }
    })
}


//----------DELETE----------------

const deletarProduto = (id) => {
    return fetch(`${url}/products/${id}`, {
        method: "DELETE",
    }).then((response) => {
        if(response.status != 200){
            console.log(`Erro no servidor: ${response.status}`)
        }else {
            return response.json()
        }
    })
}
