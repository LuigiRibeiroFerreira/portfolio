import React from "react";

import styled, { keyframes } from "styled-components";
import linkedin from "../../img/Linkedin.png";
import Instagram from "../../img/Instagram.png";
import Github from "../../img/Github.png";
import { goToHome, goToProjects } from "../../router/Cordinator";
import { useHistory } from "react-router"
import { ButtonStyle, HeaderStyle, Iconstyle } from "./HeaderStyles";





const Header = () =>
{
    const history = useHistory();

    return <HeaderStyle>
        
            <ButtonStyle onClick={()=>goToHome(history)}>Início</ButtonStyle>
        
            <div>
            <a target="_blank" href="https://www.instagram.com/maarioverde/"><Iconstyle src={Instagram}></Iconstyle></a>
            <a target="_blank" href="https://github.com/maarioverde"><Iconstyle src={Github}></Iconstyle></a>
            <a target="_blank" href="https://www.linkedin.com/in/luigi-ribeiro-ferreira-163085224/"><Iconstyle src={linkedin}></Iconstyle></a>
            </div>
        
            
        
        
            <ButtonStyle onClick={()=>goToProjects(history)}>Projetos</ButtonStyle>
        
    </HeaderStyle>
}

export default Header;