import React from "react";
import { ReactDOM } from "react";
import styled from 'styled-components'
function Home(){
    const Lin=styled.a`color:black; margin-left:10px; margin-right:10px;  text-decoration:None`
    return(
        <div>
            <Lin href="#" class="nav-link">Home</Lin>
        </div>
    )
} 
export default Home;