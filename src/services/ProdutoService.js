import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();
const transformProduto = (produto) => {

  return {
    ...produto,
    id: produto._id,
    titulo: produto.titulo,
  };
};


const parseTransformLista = (response) => parseResponse(response).then((produtos) => produtos.map(transformProduto));

const parseTransformItem = (response) => parseResponse(response).then(transformProduto);

export const ProdutoService = {
  getLista: () =>
    fetch(Api.produtoLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.produtoById(id), { method: "GET" }).then(parseTransformItem),
  create: (produto) => fetch(Api.createProduto(), { method: "POST", body: JSON.stringify(produto), mode: "cors", headers: {
        "Content-Type": "application/json",
    } }).then(parseTransformItem),
  updateById: (id, produto) =>
    fetch(Api.updateProdutoById(id), { method: "PUT",  body: JSON.stringify(produto), mode: "cors", headers: {
      "Content-Type": "application/json",
  } }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteProdutoById(id), { method: "DELETE" }).then(parseResponse),
};