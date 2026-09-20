import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
    "MySQL",
    "Python"
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;