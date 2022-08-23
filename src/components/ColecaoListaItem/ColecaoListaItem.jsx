import { ActionMode } from '../../constants/index';
import './ColecaoListaItem.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function ListaProdutoItem({
  produto,
  // quantidadeSelecionada,
  // index,
  clickItem,
  mode,
}) {
  const badgeAction = (canRender) => {
    if (canRender)
      return <span className="ListaProdutoItem__tag"> {mode} </span>;
  };
  return (
    <Container>
      <Col
        md={4}
        xs={12}
        className={`ListaProdutoItem ${mode !== ActionMode.NORMAL && 'ListaProdutoItem--disable'}`}
        onClick={() => clickItem(produto)}
      >
        <div className="ListaProdutoItem__disable">
          {badgeAction(mode !== ActionMode.NORMAL)}
        </div>
        <img
          className="ListaProdutoItem__foto"
          src={produto.foto}
          alt="imagens"
        />
        <div className="ListaProdutoItem__titulo">{produto.titulo}</div>
        <div className="ListaProdutoItem__preco">
          R$ {produto.preco.toFixed(2)}
        </div>
      </Col>
    </Container>
  );
}
export default ListaProdutoItem;
