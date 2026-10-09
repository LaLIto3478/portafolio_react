export function Projects({ projects }) {
  return (
    <section className="projects-section" id="proyectos">
      <div className="section-heading compact-heading">
        <p className="eyebrow">03 / Proyectos</p>
        <h2>Mis proyectos</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-topline">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}
