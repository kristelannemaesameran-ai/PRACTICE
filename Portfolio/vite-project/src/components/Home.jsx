import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-text">
        <p>Hello! I'm</p>
        <h1>Kristel Anne Mae Sameran</h1>
        <h3>Aspiring Data Analyst & IT Student</h3>
        <p>
          Welcome to my personal portfolio. This website shows my skills,
          projects, and interests in Information Technology.
        </p>

        <a href="#projects" className="button">
          View My Projects
        </a>
      </div>

      <div className="profile">
        <img src="/profile.jpg" alt="Kristel Anne Mae Sameran" />
      </div>
    </section>
  );
}

export default Home;