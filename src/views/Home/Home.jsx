 import {useState, useEffect} from 'react';
import ColecaoLista from "components/ColecaoLista/ColecaoLista";
import Navbar from 'components/Navbar/Navbar';

import Sobre from 'components/Sobre/Sobre';
import AdicionaProduto from "components/ModalAdicionar/AdicionarProduto";
import { produtos_default } from "mocks/colecao01.js";
import { produtos_green } from "mocks/colecao02.js";
import { produtos_light } from "mocks/colecao03.js";

import "./Home.css";
import Banner from 'components/Banner/Banner';
import Footer from '../../components/Footer/Footer';


function Home() {

  const [canShowAdicionaProduto, setCanShowAdicionaProduto] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [produtos, setProdutos]= useState(produtos_default);

 

  const changeBannerHandle = (index) => {
    console.log(index);
    setBannerIndex(index);
  }

  const newProductHandle = (produto) => {
    console.log(`produto novo adicionado ${produto}`)
    console.log(produto)
    produtos.push(produto)
  }

useEffect(()=> { 
  if(bannerIndex === 2) {
    setProdutos(produtos_light);
  } else if(bannerIndex === 1) {
    setProdutos(produtos_green) ;
  } else {
    setProdutos(produtos_default) ;
  };
},[bannerIndex])



  return (
    <div className="Home">
    
      <Navbar createProduto={() => setCanShowAdicionaProduto(true)} bannerIndex={bannerIndex}/>
      <Banner changeBannerHandle = {changeBannerHandle} />
      <div className="Home__container">
        
        <ColecaoLista produtos={produtos} />

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
