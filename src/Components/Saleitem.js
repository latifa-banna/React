import React from 'react';
import { ReactDOM } from "react";
import styled from 'styled-components';

function Sale(){
    
    const IMG=styled.img`background-color:grey; text-align:center; padding:50px 60px`
    const P2=styled.p`text-align:center ;text-size:80px; font-weight:bold`
    const P3=styled.p`text-align:center ;text-size:80px`
    const BUTTON=styled.button`margin-left:5f0px`
    return(
        <div>
            <div>
                <IMG scr="picture/pictures/salle.jpg" ></IMG>
                <P2>Sale Item</P2>
                <P3><del>$50.00</del>$25.00</P3>
                <BUTTON>add to cart</BUTTON>
            </div>
        </div>
    )
}
export default Sale;