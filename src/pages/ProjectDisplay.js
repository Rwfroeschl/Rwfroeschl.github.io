import React from 'react';
import { useParams } from 'react-router-dom';
import {ProjectList} from "../helpers/ProjectList";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
    <div className="project">
        <h1> {project.name}</h1>
        {project.video ? (
            <video src={project.video} controls />
        ) : (
            <img src={project.image} />
        )}
        <p><b>Description:</b><br></br>{project.description}</p>
        <p><b>Skills:</b> <br></br>{project.skill}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer"><GithubIcon /></a>

    </div>
    );
}

export default ProjectDisplay;