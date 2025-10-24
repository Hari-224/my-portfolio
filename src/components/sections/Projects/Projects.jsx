
// import React, { useState } from 'react';
// import ProjectCard from './ProjectCard';
// import FilterButtons from './FilterButtons';
// import { projects, PROJECT_FILTERS } from '../../../data/projects';
// import './Projects.css';

// const Projects = () => {
//   const [projectFilter, setProjectFilter] = useState('All');

//   const filteredProjects =
//     projectFilter === 'All'
//       ? projects
//       : projects.filter((p) => p.category === projectFilter);

//   return (
//     <section id="projects" className="section">
//       <div className="container">
//         <h2 className="section-title">Featured Projects</h2>
//         <p className="section-subtitle">
//           Showcasing innovative solutions that make an impact
//         </p>

//         {/* Filter Buttons */}
//         <FilterButtons
//           filters={PROJECT_FILTERS}
//           activeFilter={projectFilter}
//           onFilterChange={setProjectFilter}
//         />

//         {/* Projects Grid */}
//         <div className="projects-grid">
//           {filteredProjects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import FilterButtons from './FilterButtons';
import { projects, PROJECT_FILTERS } from '../../../data/projects';
import './Projects.css';

const Projects = () => {
  const [projectFilter, setProjectFilter] = useState('All');

  const filteredProjects =
    projectFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  return (
    <section id="projects" className="section">
      <div className="container">

        {/* Internship Highlight Banner */}
        {/* <div
          className="highlight-banner"
          onClick={() =>
            window.open('https://github.com/your-repo-link', '_blank')
          }
        >
          🚀 Internship Highlight: “Suguna Groups Chatbot Application” — Built using Flutter + Spring Boot + NLP.
        </div> */}

        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing innovative solutions that make an impact
        </p>

        {/* Filter Buttons */}
        <FilterButtons
          filters={PROJECT_FILTERS}
          activeFilter={projectFilter}
          onFilterChange={setProjectFilter}
        />

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
