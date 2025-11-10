// src/sections/Projects/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projects } from '../../data/projectsData';
import styles from './ProjectDetail.module.css';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [gifKey, setGifKey] = useState(Date.now());

  useEffect(() => {
    // Every time we enter this page (slug changes), force a new key
    setGifKey(Date.now());
  }, [slug]);

  if (!project) {
    return (
      <div className={styles.container}>
        <h2>Project not found</h2>
        <Link to="/" className={styles.backLink}>
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Link to="/" className={styles.backLink}>
          ← Back
        </Link>
        <h1 className={styles.projectTitle}>{project.name}</h1>
        <div style={{ width: '60px' }} />
      </div>

      <div className={styles.media}>
        {/* Cache-buster added so the GIF restarts every time */}
        <img
          key={gifKey}
          src={`${project.gif}?t=${gifKey}`}
          alt={`${project.name} demo GIF`}
        />
      </div>

      <div className={styles.section}>
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </div>

      <div className={styles.section}>
        <h2>Technology Stack</h2>
        <ul className={styles.techList}>
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <button className="hover">View on GitHub</button>
        </a>
      )}
    </section>
  );
}

export default ProjectDetail;






