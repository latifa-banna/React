import React from 'react';
import { ReactDOM } from "react";
import styled from 'styled-components';

function special(){
    const P=styled.p`background-color:grey; text-align:center; padding:50px 60px`
    const P2=styled.p`text-align:center ;text-size:80px; font-weight:bold`
    const P3=styled.p`text-align:center ;text-size:80px;`  ;
    const BUTTON=styled.button`margin-left:50px`   
    return(
        <div>
            <div>
                <P>450*300</P>
                <P2>Special Item</P2>
                <P3><del>$20.00</del>$18.00</P3>
                <BUTTON>add to cart</BUTTON>
            </div>
        </div>
    )
}
export default special;