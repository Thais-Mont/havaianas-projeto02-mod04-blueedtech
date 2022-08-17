import './Footer.css';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Git from 'assets/icons/gitbook.svg';
import Linkedin from 'assets/icons/linkedin.svg';
function Footer({ bannerIndex }) {
  const [background, setBackground] = useState('dark');
  useEffect(() => {
    if (bannerIndex === 2) {
      setBackground('footerContato-greenligth');
    } else if (bannerIndex === 1) {
      setBackground('footerContato-green');
    } else {
      setBackground('footerContato-dark');
    }
  }, [bannerIndex]);

  return (
    <div className={background} id="contato">
      <div className={background}>
        <div className="redes">
          <div className="redes_caio">
            <div className="icons">
              <Image className="icone" src={Git} alt="icone_git" />
              <a href="https://github.com/CaioSilvaWeb" target="_blank">
                https://github.com/CaioSilvaWeb
              </a>
            </div>
            <div className="icons">
              <Image className="icone" src={Linkedin} alt="icone_linkedin" />
              <a href="https://www.linkedin.com/in/caio-silva-web/">
                https://www.linkedin.com/in/caio-silva-web/
              </a>
            </div>
          </div>

          <div className="redes_thais">
            <div className="icons">
              <Image className="icone" src={Git} alt="icone_git" />
              <a href="https://github.com/Thais-Mont" target="_blank">
                https://github.com/Thais-Mont
              </a>
            </div>
            <div className="icons">
              <Image className="icone" src={Linkedin} alt="icone_linkedin" />
              <a href="https://www.linkedin.com/in/thaís-vieira-monteiro/">
                https://www.linkedin.com/in/thaís-vieira-monteiro/
              </a>
            </div>
          </div>
        </div>
        <p className="copy">
          Desenvolvido Por Caio e Thais | Projeto BlueEdtech
        </p>
        <p className="copy">
          Todos os dados foram retirados do site oficial da{' '}
          <a href="https://havaianas.com.br/" target="_blank">
            Havaianas
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
