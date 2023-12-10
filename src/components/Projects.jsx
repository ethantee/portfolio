import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        id: 1,
        title: "Real-Time Route Recommendation System",
        description: "This is a project.",
        image: "/projects/route.png",
        gitUrl: "https://github.com/ethantee/Real-Time-Route-Recommendation-System"

    },
    {
        id: 2,
        title: "Sentiment Analysis",
        description: "This is a project.",
        image: "/projects/sentiment-analysis.png",
        gitUrl: "https://github.com/ethantee/Sentiment-Analysis"
    },
];

const Projects = () => {
    return (
        <div id="projects" className="anchor-offset">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full w-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;