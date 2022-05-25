import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.jpg';

function Navigation() {
  return (
    <NavigationStyled>
        <div className="avatar">
            <img className="img" scr={avatar} alt=""/>
        </div>
        <ul className="nav-items">
            <li className="nav-item">
                <NavLink to="/home" activeClassName="active-class">Home</NavLink>
            </li>
        </ul>
        <ul className="nav-items">
            <li className="nav-item">
                <NavLink to="/home" activeClassName="active-class">About</NavLink>
            </li>
        </ul>
        <ul className="nav-items">
            <li className="nav-item">
                <NavLink to="/home" activeClassName="active-class">Contact</NavLink>
            </li>
        </ul>
        <footer className="footer">
          <p>@2022</p>
        </footer>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  aling-items: center;
  height: 100%;
  width: 100%;

  .avatar{
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 2rem 0;
    img{
      width: 100%;
      border-radius: 50%;
      border: 8px solid var (--border-color);
    }
  }
`;
export default Navigation;