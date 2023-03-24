import './style.css';
import minhalogo from '../../Img/minhalogo.png';

function Header() {
    return (
    <header className="header">

        <div className="content">
          <img src={minhalogo} alt="imagem" /> 

          <div className="menu">
            <div>
              <a href="/Trabalhos"  className=''>Trabalhos</a>
              <a href="/Portifólio" className=''>Portifólio</a> 
              <a href="/Fotografia" className=''>Fotografia</a> 
             <a href="/Contato" className=''>Contato</a> 
            </div>  
          </div>
        </div>

    </header>
    
    )

}
export default Header;

// react router dom