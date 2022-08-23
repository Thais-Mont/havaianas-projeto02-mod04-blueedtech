import React, { useState, useCallback } from "react";
import { ActionMode } from "../../constants/index";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DetalhesModal from "components/DetalheModal/DetalheModal";
import { ProdutoService } from "services/ProdutoService";
import ColecaoListaItem from "components/ColecaoListaItem/ColecaoListaItem";
import AlterarProduto from "../ModalAdicionar/AlterarProduto";
import "./ColecaoLista.css";

function ColecaoLista({produtos, mode, updateProduto, deleteProduto}) {
  const [produtoSelecionado, setProdutoSelecionado] = useState({});
  const adicionarItem = useCallback((produtoIndex) => {
    const produto = {
      [produtoIndex]: Number(produtoSelecionado[produtoIndex] || 0) + 1,
    };
    setProdutoSelecionado({ ...produtoSelecionado, ...produto });
  },
  [produtoSelecionado]);



  const [produtoModal, setProdutoModal] = useState(false);
  const [editarModal, setEditarModal] = useState(false);
  const removerItem = async (produto) => {
    const response = await ProdutoService.deleteById(produto._id);
    if(response) {
      deleteProduto(produto);
    }
  };

  const openModalHandle = (produtoId) => {
    console.log(mode)
    if(ActionMode.NORMAL === mode) {
    console.log(`modal ${produtoId}`)
    setProdutoModal(produtoId) 
  } else if(ActionMode.DELETAR === mode) {
    removerItem(produtoId)
  } else {
    setEditarModal(produtoId);
  }
  };
 

  return (
    <>
    <Container>
    <Row>
    <div className="ListaProduto" id="produtos">
      {produtos.map((produto, index) => (
        <ColecaoListaItem
          mode = {mode}
          key={`ListaProdutoitem-${index}`}
          produto={produto}
          quantidadeSelecionada={produtoSelecionado[index]}
          index={index}
          clickItem={openModalHandle}
          onAdd= {(index) => adicionarItem(index)}
          onRemove= {(index) => removerItem(index)}
        />
      ))}
      
      {produtoModal && (
        <DetalhesModal
          produto={produtoModal}
          closeModal={() => setProdutoModal(false)}
        />
      )}

{
          editarModal && <AlterarProduto 
            closeModal={() => setEditarModal(false)}
            onAlterProduto={(produto) => {updateProduto(produto)}}
            produto={editarModal}
            />
        }
    </div>
    </Row>
    </Container>
    </>
    
  );
}

export default ColecaoLista;

