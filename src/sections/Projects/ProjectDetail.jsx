import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projects } from '../../data/projectsData';
import styles from './ProjectDetail.module.css';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [gifKey, setGifKey] = useState(Date.now());

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);

  useEffect(() => {
    setGifKey(Date.now());
    setIsFeaturesOpen(false);
    setIsTechOpen(false);
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

  // split lines safely
  const featuresLines = project.keyFeatures
    ? project.keyFeatures.split('\n').filter((line) => line.trim() !== '')
    : [];

  const techLines = project.techStack
    ? project.techStack.split('\n').filter((line) => line.trim() !== '')
    : [];

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
        <img
          key={gifKey}
          src={`${project.gif}?t=${gifKey}`}
          alt={`${project.name} demo GIF`}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p className={styles.paragraph}>{project.overview}</p>
      </div>

      {/* KEY FEATURES */}
      <div className={styles.accordionItem}>
        <button
          type="button"
          className={styles.accordionButton}
          onClick={() => setIsFeaturesOpen((prev) => !prev)}
        >
          <span>Key features</span>
          <span className={styles.chevron}>{isFeaturesOpen ? '–' : '+'}</span>
        </button>
        {isFeaturesOpen && (
          <div className={styles.accordionPanel}>
            <ul className={styles.list}>
              {featuresLines.map((line, idx) => {
                // remove "1. " / "2. " / "3. " at the start
                const cleaned = line.replace(/^\d+\.\s*/, '').trim();
                if (!cleaned) return null;
                return <li key={idx}>{cleaned}</li>;
              })}
            </ul>
          </div>
        )}
      </div>

      {/* TECH STACK */}
      <div className={styles.accordionItem}>
        <button
          type="button"
          className={styles.accordionButton}
          onClick={() => setIsTechOpen((prev) => !prev)}
        >
          <span>Tech Stack</span>
          <span className={styles.chevron}>{isTechOpen ? '–' : '+'}</span>
        </button>
        {isTechOpen && (
          <div className={styles.accordionPanel}>
            <ul className={styles.list}>
              {techLines.map((line, idx) => {
                const trimmed = line.trim();

                // sub-item like "- React 18 ..."
                if (trimmed.startsWith('- ')) {
                    return (
                      <li key={idx} className={styles.subItem}>
                        {trimmed.replace(/^-+\s*/, '')}
                      </li>
                    );
                }

                // empty line
                if (!trimmed) return null;

                // section heading like "Frontend:", "Backend:", "UI e styling:"
                return (
                  <li key={idx} className={styles.listHeading}>
                    {trimmed.replace(/:$/, '')}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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







