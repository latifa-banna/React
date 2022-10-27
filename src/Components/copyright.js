import React from 'react';
import { ReactDOM } from "react";
import styled from 'styled-components';

function Right(){
    const P=styled.footer`background-color:black; color:white;
    text-align:center; margin:20px;margin-top:100px;padding:15px ; font-size:10px`
    return(
        <div>
            <div>
                <P>Copyright  Your Website 2022</P>
            </div>
        </div>
    )
}
export default Right;