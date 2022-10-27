
import React from 'react';

import ReactDOM from 'react-dom';
import Nav from './Components/nav';
import Shopstyle from './Components/Shopstyle';
import Fancy from './Components/FancyProduct';
import Special from './Components/Specialitem';
import Sale from './Components/Saleitem';
import Popular from './Components/Popularitem';
import Right from './Components/copyright';
import styled from 'styled-components';

function App() {
  const DIV=styled.div`display:flex;
  justify-content:space-around ; margin-top:60px`
  return (
    
    <div >
        <Nav />
        <Shopstyle />
        <DIV>
          <Fancy />
          <Special />
          <Sale />
          <Popular />
        </DIV>
        
        <Right />
    </div>
  );
}

export default App;
