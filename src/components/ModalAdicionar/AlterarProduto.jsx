import "./AdicionarProduto.css";
import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { ProdutoService } from "services/ProdutoService";

function AlterarProduto({ closeModal, onAlterProduto, produto }) {
    const form = {
        preco: produto.preco,
        titulo: produto.titulo,
        descricao: produto.descricao,
        foto: produto.foto,
    };

    const [state, setState] = useState(form);
    const [canDisable, setCanDisable] = useState(true);

    const canDisableSendButton = () => {
        const response = !Boolean(
            state.descricao.length &&
            state.foto.length &&
            state.titulo.length &&
            state.preco.length
        );

        setCanDisable(response);
    };

    const handleChange = (e, name) => {
        setState({ ...state, [name]: e.target.value });
    };

    useEffect(() => {
        canDisableSendButton();
    });

    const createProduto = async () => {
        
      console.log('ola');
        const { titulo, descricao, preco, foto } = state;

        const produtoEdit = {
            titulo,
            descricao,
            preco: parseFloat(preco),
            foto,
        };

        const response = await ProdutoService.updateById(produto._id, produtoEdit);
        onAlterProduto(response);
        closeModal();
    };

    return (
        <Modal closeModal={closeModal}>
            <div className="AdicionaProdutoModal">
                <form autoComplete="off">
                    <h2> Cadastrar Produto </h2>
                    <div>
                        <label className="AdicionaProdutoModal__text" htmlFor="titulo"> </label>
                        <input
                            id="titulo"
                            placeholder="Título:"
                            type="text"
                            value={state.titulo}
                            required
                            onChange={(e) => handleChange(e, "titulo")} />
                    </div>
                    <div>
                        <label className="AdicionaProdutoModal__text" htmlFor="preco"> </label>
                        <input
                            id="preco"
                            placeholder="Preco"
                            type="text"
                            value={state.preco}
                            required
                            onChange={(e) => handleChange(e, "preco")} />
                    </div>
                    <div>
                        <label className="AdicionaProdutoModal__text" htmlFor="descricao"> </label>
                        <input
                            id="descricao"
                            placeholder="Descricao"
                            type="text"
                            value={state.descricao}
                            required
                            onChange={(e) => handleChange(e, "descricao")} />
                    </div>
                    <div>
                    <label className="AdicionaProdutoModal__text" htmlFor="foto"> </label>
                        <input
                            className=" AdicionaProdutoModal__foto"
                            id="foto"
                            placeholder="URL da Imagem"
                            type="text"
                            value={state.foto}
                            required
                            onChange={(e) => handleChange(e, "foto")} />
                    </div>


                    <button
                        className="AdicionaProdutoModal__enviar"
                        type="button"
                        onClick={()=> createProduto()} >
                        Salvar
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default AlterarProduto;
