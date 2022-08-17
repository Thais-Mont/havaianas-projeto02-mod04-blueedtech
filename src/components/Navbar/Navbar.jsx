import './Navbar.css';
import { useState, useEffect } from 'react';
import Logo from '../../assets/logo/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import havaianas from '../../assets/images/havaianas.svg';
import Image from 'react-bootstrap/Image';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarShow({ createProduto, bannerIndex }) {
  const [background, setBackground] = useState('dark');

  const closeModal = () => {};

  const onCreateProduto = () => {};

  useEffect(() => {
    if (bannerIndex === 2) {
      setBackground('greenligth');
    } else if (bannerIndex === 1) {
      setBackground('green');
    } else {
      setBackground('dark');
    }
  }, [bannerIndex]);

  return (
    <>
      <Navbar key="md" expand="md" variant={background}>
        <Container fluid>
          <Navbar.Brand href="#banner">
            {' '}
            <img src={Logo} width={100} height={100} alt="havaianas" />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'md'`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-$'md'`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$'md'`}
            className="menu_expand"
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-2">
                <Nav.Link href="#banner">Coleções</Nav.Link>
                <Nav.Link href="#produtos">Produtos</Nav.Link>
                <Nav.Link href="#sobre">Sobre Nós</Nav.Link>
                <Nav.Link href="#contato">Contato</Nav.Link>
              </Nav>
              <Nav className="d-flex">
                <Image
                  variant="outline"
                  onClick={() => createProduto(closeModal, onCreateProduto)}
                  className="Linhas__bottons"
                  width={80}
                  height={50}
                  alt="Adicionar Novo"
                  src={havaianas}
                ></Image>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarShow;
