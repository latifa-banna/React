import React from 'react';
import { ReactDOM } from "react";
import styled from 'styled-components';
import myImage from "../cart.png"
function Cart(){
    const P=styled.p` border:1px solid black;border-radius:4px ;margin-top:20px ; padding:2px`;
    const SPAN=styled.span`margin-right:8px`;
    const IMG=styled.img`width:20px; height:20px ; margin-right:10px`;
    const SPAN2=styled.span`background-color:black; color:white;border-radius:50% ;padding:2px 5px`
    return(
        <div>
            <P><IMG src={myImage} /><SPAN>Cart </SPAN> <SPAN2> 0 </SPAN2></P>
        </div>
    )
}
export default Cart;