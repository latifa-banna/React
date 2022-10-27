import React from "react";
import { ReactDOM } from "react";
import styled from 'styled-components'
function About(){
    const Lin=styled.a`color:black; margin-left:10px; margin-right:10px;  text-decoration:None`
    return(
        <div>
            <Lin href="#" class="nav-link">About</Lin>
        </div>
    )
}
export default About;