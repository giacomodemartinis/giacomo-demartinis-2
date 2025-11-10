// src/App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import ProjectDetail from './sections/Projects/ProjectDetail.jsx';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Projects />
          </>
        }
      />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;

