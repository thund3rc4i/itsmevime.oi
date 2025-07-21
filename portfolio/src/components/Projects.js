import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description of Project One.',
            link: 'https://link-to-project-one.com'
        },
        {
            title: 'Project Two',
            description: 'Description of Project Two.',
            link: 'https://link-to-project-two.com'
        },
        {
            title: 'Project Three',
            description: 'Description of Project Three.',
            link: 'https://link-to-project-three.com'
        }
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;