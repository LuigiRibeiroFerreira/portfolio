import styled from "styled-components"


export const HeaderStyle = styled.div`
width: 100vw;
height: 8vh;
display: flex;
align-items: center;
justify-content:space-between;
background-color: #232426;
` 
export const ButtonStyle = styled.button`
cursor: pointer;
border-radius: 15px;
border: 2px solid #F2F2F2;
width: 140px;
height: 30px;
background-color:#232426;
color: #F2F2F2;
position: relative;
margin: 2em;
z-index: 1;
transition: all 250ms ease-in;

::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #04BF68;
    border-radius:15px;
    z-index: -1;
    transform: scale(0);
    opacity: 0.2;
    transform-origin: right;
    transition: transform 350ms ease-in;
    
}
:hover{
    text-shadow: 0 0 2px white ,
    0 0 10px #04BF68;
    font-size: medium;
    border: 2px solid #04BF68;
    transform: scale(1.01);
    box-shadow: 0px 0px 20px #04BF68,
    inset 0px 0px 20px #04BF68
    ;
    color: #F2F2F2;
    ::after{
        transform: scale(1);
        
        transform-origin: left;
    }
}
`

export const Iconstyle=styled.img`
height: 5vh;
position: relative;
z-index: 1;
transition: all 350ms;

:hover{
    
    border-radius: 50%;
    box-shadow: 0 18px 30px #04BF68,
    inset 0px 0px 20px #04BF68;
    
    
    
    
}
::after{
    background: red;
    border: 4px dashed #04BF68 ;
    border-radius: 20px;
}
`
