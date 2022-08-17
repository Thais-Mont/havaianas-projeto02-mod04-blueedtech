const PaletaContext = {
  paletaEndpoint: () => `${Api.baseUrl}/paletas`,
  paletaLista: () => `${PaletaContext.paletaEndpoint()}/all-paletas`,
  paletaById: (id) => `${PaletaContext.paletaEndpoint()}/one-paleta/${id}`,
  createPaleta: () => `${PaletaContext.paletaEndpoint()}/create-paleta`,
  updatePaletaById: (id) => `${PaletaContext.paletaEndpoint()}/update-paleta/${id}`,
  deletePaletaById: (id) => `${PaletaContext.paletaEndpoint()}/delete-paleta/${id}`,
};

export const Api = {
  baseUrl: "https://api-elgeladon.herokuapp.com",
  ...PaletaContext,
};