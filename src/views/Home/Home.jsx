import {useState, useEffect} from 'react';
import { ActionMode } from "../../constants/index";
import ColecaoLista from "components/ColecaoLista/ColecaoLista";
import Navbar from 'components/Navbar/Navbar';



import Sobre from 'components/Sobre/Sobre';
import AlterarProduto from "components/ModalAdicionar/AlterarProduto";
import AdicionaProduto from "components/ModalAdicionar/AdicionarProduto";
// import { produtos_default } from "mocks/colecao01.js";
// import { produtos_green } from "mocks/colecao02.js";
// import { produtos_light } from "mocks/colecao03.js";
import { ProdutoService } from "services/ProdutoService";


import "./Home.css";
import Banner from 'components/Banner/Banner';
import Footer from '../../components/Footer/Footer';


function Home() {
 
  const [canShowAdicionaProduto, setCanShowAdicionaProduto] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [produtos, setProdutos]= useState([]);
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  }


  const changeBannerHandle = (index) => {
    setBannerIndex(index);
  }

  const newProductHandle = (produto) => {
    console.log(`produto novo adicionado ${produto}`)
    produtos.push(produto)
  }

  const updateProduto = (produto) => {

    console.log(`produto alterado ${produto}`)
    window.location.reload(true);
  }

  const deleteProduto = (produto) => {
    console.log(`produto removido ${produto}`)
    window.location.reload(true);
  }


const getLista = async () => {
  const response = await ProdutoService.getLista();
  setProdutos(response);
};

useEffect(() => {
  getLista();
}, []);




  return (
    <div className="Home">
    
      <Navbar
        mode = {modoAtual}
        createProduto={() => setCanShowAdicionaProduto(true)}
        bannerIndex={bannerIndex}
        updateProduto={() => handleActions(ActionMode.ATUALIZAR)}
        deleteProduto={() => handleActions(ActionMode.DELETAR)}
        
        />

      <Banner changeBannerHandle = {changeBannerHandle} />

      <div className="Home__container">
        
        <ColecaoLista
        mode= {modoAtual}
         produtos={produtos}
         deleteProduto={(produto) => {deleteProduto(produto)}}
         updateProduto={(produto) => {updateProduto(produto)}}
          />

        {
          canShowAdicionaProduto && <AdicionaProduto 
            closeModal={() => setCanShowAdicionaProduto(false)}
            onCreateProduto={(produto) => {newProductHandle(produto)}}
            />
        }
         
      </div>
      <Sobre changeBannerHandle ={() => setCanShowAdicionaProduto(true)} bannerIndex={bannerIndex} />
      <Footer changeBannerHandle ={() => setCanShowAdicionaProduto(true)} bannerIndex={bannerIndex}/>
    </div>
  );
}

export default Home;
