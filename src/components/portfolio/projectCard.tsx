import React from 'react';
import Project from '../../models/project';

interface ProjectCardProps extends Project {
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    return (
        <div className="project-card" onClick={props.onClick}>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.summary}</p>
        </div>
    );
};

export default ProjectCard;
