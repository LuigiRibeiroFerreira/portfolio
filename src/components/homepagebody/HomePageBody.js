import styled from "styled-components";
import Logo from "../../img/luigi-marca-2.png"

const HomePageBodyStyle = styled.div`
width: 100vw;
height: 92vh;
display: flex;
background-color: rgb(15,14,14,100);
justify-content:center;
align-items: center;
`

const LogoBox =styled.div`

   
    width: 20vw;
    height: 63vh;
    position: relative;
    left:-8vw;
    cursor: pointer;
    
    :hover h3::after{
        transform: scaleX(1);
        text-shadow: none;
        
    }
    :hover h5::after{
        transform: scaley(1);
        text-shadow: none;
    }
    :hover h3{
        color: white;
        text-shadow: 0 0 2px white ,
        0 0 10px #04BF68;;
    }
    :hover h5{
        color:  #F2F2F2;
        text-shadow: 0 0 1px white ,
        0 0 5px black,
        0 0 7px black;
    }
    
`
const TitleStyle = styled.h3`
    text-align: center;
    
    position: relative;
    color: transparent;
    z-index: 1;
    transition: all 150ms ease-in 150ms;
    
    ::after{
        content: '';
        position: absolute;
        top:-0.8rem;
        left: 0;
        width: 100%;
        height: 170%;
        background: #232426;
        color:#232426;
        z-index: -1;
        border-top-left-radius:15px ;
        border-top-right-radius:15px ;
        border-bottom: 1px solid black;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 250ms ease-in;
    }

`
const TextStyle =styled.h5`
text-align: center;
position: relative;
z-index: 1;
color: transparent;
transition: all 100ms ease-in 350ms;
::after{
    content: "a";
    border-bottom-left-radius:15px ;
    border-bottom-right-radius:15px ;
    
    position: absolute;
    width: 100%;
    height: 150%;
    left: 0;
    top: -1.07rem;
    background: #232426;
    z-index: -1;
    color:#232426 ;
    opacity: 0.5;
    transform: scaleY(0);
    transform-origin: top;
    transition: all 250ms ease-in;
    transition-delay: 250ms;
}
`

const LogoStyle = styled.img`
width: 17vw;
height: 50vh;

opacity: 0.9;
position: relative;
left: 10.5vw;
`


const HomePageBody = () =>
{
    return <HomePageBodyStyle>

        
    
        <LogoStyle src= {Logo}></LogoStyle>
        <LogoBox>
        <TitleStyle>Desenvolvedor Full-Stack</TitleStyle>
        <TextStyle><br />Desenvolvedor que adora aprender e explorar sua criatividade.<br /> <br /> <br />
            Possui conhecimentos em Nodejs, ReactJS, Git, HTML, CSS, C# e C++.</TextStyle>
        </LogoBox>
        
        
    </HomePageBodyStyle>
}

export default HomePageBody;