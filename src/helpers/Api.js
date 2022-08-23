const ProdutoContext = {
  produtoEndpoint: () => `${Api.baseUrl}produtos`,
  produtoLista: () => `${ProdutoContext.produtoEndpoint()}/`,
  produtoById: (id) => `${ProdutoContext.produtoEndpoint()}/produto/${id}`,
  createProduto: () => `${ProdutoContext.produtoEndpoint()}/create`,
  updateProdutoById: (id) => `${ProdutoContext.produtoEndpoint()}/update/${id}`,
  deleteProdutoById: (id) => `${ProdutoContext.produtoEndpoint()}/delete/${id}`,
};

export const Api = {
  baseUrl: 'https://havaianas-projeto02-mod04-blue.herokuapp.com/',
  ...ProdutoContext,
};