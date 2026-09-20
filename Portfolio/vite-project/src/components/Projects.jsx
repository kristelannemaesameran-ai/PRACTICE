import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Waste Sorting Challenge",
      description: "A Pygame project about sorting different types of waste."
    },
    {
      title: "Student Information System",
      description: "A simple system for displaying and managing student information."
    },
    {
      title: "React Disney Gallery",
      description: "A React application that displays Disney characters using an API."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;