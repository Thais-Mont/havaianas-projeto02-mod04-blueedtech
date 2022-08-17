import "./ColecaoListaItem.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function ListaProdutoItem({
  produto,
  quantidadeSelecionada,
  index,
  clickItem,
}) {

  return (
    <Container>
    <Col md={4} xs={12} className="ListaProdutoItem" onClick={() => clickItem(produto)}>
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
  )
}
export default ListaProdutoItem
