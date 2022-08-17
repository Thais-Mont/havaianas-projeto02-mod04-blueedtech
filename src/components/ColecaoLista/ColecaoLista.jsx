import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DetalhesModal from "components/DetalheModal/DetalheModal";
import ColecaoListaItem from "components/ColecaoListaItem/ColecaoListaItem";
// import { ProdutoService } from "services/ProdutoService";
import "./ColecaoLista.css";

function ColecaoLista({produtos}) {
const [produtoSelecionado, setProdutoSelecionado] = useState([]);
  const adicionarItem = (produtoIndex) => {
    const produto = {
      [produtoIndex]: Number(produtoSelecionado[produtoIndex] || 0) + 1,
    };
    setProdutoSelecionado({ ...produtoSelecionado, ...produto });
  };
  const [produtoModal, setProdutoModal] = useState(false);
  const removerItem = (produtoIndex) => {
    const produto = {
      [produtoIndex]: Number(produtoSelecionado[produtoIndex] || 0) - 1,
    };
    setProdutoSelecionado({ ...produtoSelecionado, ...produto });
  };

  const openModalHandle = (produtoId) => {
    console.log(`modal ${produtoId}`)
    setProdutoModal(produtoId)
  } 

  return (
    <>
    <Container>
    <Row>
    <div className="ListaProduto" id="produtos">
      {produtos.map((produto, index) => (
        <ColecaoListaItem
          key={`ListaProdutoitem-${index}`}
          produto={produto}
          quantidadeSelecionada={produtoSelecionado[index]}
          index={index}
          clickItem={openModalHandle}
        />
      ))}
      
      {produtoModal && (
        <DetalhesModal
          produto={produtoModal}
          closeModal={() => setProdutoModal(false)}
        />
      )}
    </div>
    </Row>
    </Container>
    </>
    
  );
}

export default ColecaoLista;

