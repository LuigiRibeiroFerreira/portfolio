import styled from "styled-components";

const CardStyle=styled.div`
display: flex;
flex-direction: column;
align-items: center;
opacity: 0.6;
border: 2px solid black;
width: 250px;
height: 230px;
margin: 16px;
background-color: white;
border-radius: 15px;
margin-left: 40px;
text-transform: capitalize;

`
const LinkStyle=styled.a`
text-decoration:none ;
`

const ProjectCard = (props) =>
{ console.log(props)
    return <CardStyle>
        <LinkStyle target="_blank" href={props.project.link}>
        <h1>{props.project.title}</h1>
        <p>{props.project.description}</p>
        </LinkStyle>
    </CardStyle>
}

export default ProjectCard;