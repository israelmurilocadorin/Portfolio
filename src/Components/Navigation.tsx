import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.jpg';


function Navigation() {
  return (
    <NavigationStyled>
        <div className='avatar'>
            <img src={avatar} alt="" />
        </div>
        <ul className="nav-items">
            <li className="nav-items">
                <NavLink to='/home'>Início</NavLink>
            </li>
            <li className="nav-items">
                <NavLink to='/about'>Sobre</NavLink>
            </li>
            <li className="nav-items">
                <NavLink to='/resume'>Resumo</NavLink>
            </li>
            <li className="nav-items">
                <NavLink to='/contact'>Contato</NavLink>
            </li>
        </ul>
        <footer className="footer">
          <p>@2022 Portfolio Website</p>
        </footer>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar{
    width: 50%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 2rem 0;
    img{
      width: 100%;
      border-radius: 70%;
      border: 4px solid  
    }
  }

  .nav-items{
    width: 100%;
    text-align: center;
    padding: 0.25rem 0;
    li{
      display: block;
      a{
        display: block;
        padding: .2rem 0;
        position: relative;
        z-index: 10;
        &:hover{
          cursor: pointer;
          color: white;
          text-shadow: 0px 0px 5px white;
        }
        &::before{
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #5cadff;
          transition: All 0.4s cubic-bezier(.1,-0.2,.25,.95);
          z-indec: 3;
          opacity: 0.21;
        }
      }
      
      a:hover::before{
        width: 100%;
        height: 100%;
      }
    }
  }

  footer{
    border-top: 1px solid var(--border-color);
    width: 100%;
    p{
      padding: 1rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation