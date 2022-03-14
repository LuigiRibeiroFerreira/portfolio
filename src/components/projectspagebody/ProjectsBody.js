import React from "react";
import ProjectCard from "../projectcard/ProjectCard";
import styled from "styled-components"

const ProjectsPageBodyStyle = styled.div`
background-color:rgb(15,14,14,100) ;
display:flex ;
align-items: center ;
flex-direction: column ;
width: 100vw;
height: 92vh;
`


const ProjectsPageBody = () =>
{
    let projects =[{title:"Labefood" , img:"" , description:"Cópia de aplicativos de deleavery", link:"https://stiff-side.surge.sh/"},
    {title:"Pokedex" , img:"" , description:"Simulação de podedex usando uma api pública", link:"https://abstracted-grade.surge.sh/"}]


    return <ProjectsPageBodyStyle>
        {projects.map((project) => {
            return<ProjectCard project={project}/>
        })}
    </ProjectsPageBodyStyle>
}

export default ProjectsPageBody;