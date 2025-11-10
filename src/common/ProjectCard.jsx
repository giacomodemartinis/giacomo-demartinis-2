// src/common/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ src, h3, p }) {
  // we'll build the slug from the title, or you can pass it explicitly
  const slug = h3.toLowerCase();

  return (
    <Link to={`/projects/${slug}`}>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </Link>
  );
}

export default ProjectCard;
