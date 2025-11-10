// src/sections/Projects/Projects.jsx
import styles from './ProjectsStyles.module.css';
import soldy from '../../assets/soldy.png';
import walle from '../../assets/walle.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={soldy} h3="Soldy" p="Budgeting App" />
        <ProjectCard src={walle} h3="Walle" p="Wallpaper App" />
      </div>
    </section>
  );
}

export default Projects;
