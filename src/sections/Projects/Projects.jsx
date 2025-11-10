// src/sections/Projects/Projects.jsx
import styles from './ProjectsStyles.module.css';
import soldy from '../../assets/soldy15.png';
import walle from '../../assets/walle2.png';
import auri from '../../assets/auri.png'
import moodtracker from '../../assets/moodtracker.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Products</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={soldy} h3="Soldy" p="Budgeting App" />
        <ProjectCard src={walle} h3="Walle" p="Wallpaper App" />
        <ProjectCard src={auri} h3="Auri" p="Flashcards App" />
        <ProjectCard src={moodtracker} h3="Moodtracker" p="Journaling App" />
      </div>
    </section>
  );
}

export default Projects;
