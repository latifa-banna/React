import React from 'react';
import { ReactDOM } from "react";
import styled from 'styled-components';

function Popular(){
    const P=styled.p`background-color:grey; text-align:center; padding:50px 60px`
    const H5=styled.p`text-align:center ;text-size:80px; font-weight:bold`
    const P3=styled.p`text-align:center ;text-size:80px`
    const BUTTON=styled.button`margin-left:50px` 
       return(
        <div>
            <div>
                <P>400*300</P>
                <H5>Popular Item</H5>
                <P3>$40.00</P3>
                <BUTTON>add to cart</BUTTON>
            </div>
        </div>
    )
}
export default Popular;