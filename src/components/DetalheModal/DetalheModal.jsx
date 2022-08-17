import "./DetalheModal.css";
import React, {  useEffect } from 'react';
import Modal from "components/Modal/Modal";

function DetalhesModal({ produto, closeModal }) {
  useEffect(() => {document.title = `${produto.titulo}`;  });
  return (
    <Modal closeModal={closeModal}>
      <div className="detalhesModal">
      <img
          src={produto.foto}
          width="300px"
          className="ProdutoDetalhesModal__foto"
          alt="foto"
        />
     
        <div className="ProdutoDetalhesModal__container">
          <div className="ProdutoDetalhesModal__titulo"> {produto.titulo}</div>
          <div className="ProdutoDetalhesModal__preco">
            R$ {Number(produto.preco).toFixed(2)}
          </div>
          <div className="ProdutoDetalhesModal__descricao">
            Descrição: {" "}
            {produto.descricao}
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default DetalhesModal;
