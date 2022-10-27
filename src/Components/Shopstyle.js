import React from "react";
import { ReactDOM } from "react";
import styled from 'styled-components'
function Shopstyle(){
    const DIV=styled.div`background-color:black;color:white; margin:-20px 20px ;
    padding:50px ; text-align:center`
    const SPAN=styled.span`font-size:45px ; font-weight:bold`
    const DIV2=styled.div`font-size:15px ; color:grey`
    return(
        <div>
            <DIV>
                <SPAN> Shop in style </SPAN>
                <DIV2>With this shop hompeage template</DIV2>
            </DIV>
        </div>
    )
}
export default Shopstyle;