import React ,{ ReactDOM }  from "react";
import styled from 'styled-components'
import StartBootstrap from './StartBootstrap';
import Home from "./Home";
import About from './About';
import Shops from './Shops';
import Cart from "./Cart"
function Nav(){
    const DIV=styled.div`display:flex ;justify-content:space-around ; margin-bottom:0px`
    const DIV2=styled.div`display:flex ;`
    const UL=styled.ul`margin-top:20px ; `
    const LI=styled.li`display:inline-block ;`
    return(
        <div>
        <DIV >
            <DIV2>
            <p><StartBootstrap  /></p>
            <UL>
                <LI><Home /></LI>
                <LI> <About /></LI>
                <LI> <Shops /></LI>
            </UL>
            </DIV2>
            <Cart />
        </DIV>
        </div>
    )
}
export default Nav;