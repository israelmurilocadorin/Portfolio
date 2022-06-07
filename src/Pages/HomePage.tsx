import React from 'react'
import styled from 'styled-components';
import Particles from 'react-particles-js';

function HomePage() {
  return (
    <HomePageStyled>
        <div className="p-particles-js">
            <Particles />
        </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
`;

export default HomePage;