export function About({ portfolio }) {
  return (
    <section className="about-section" id="sobre-mi">
      <div className="section-heading">
        <p className="eyebrow">02 / Perfil</p>
        <h2>Ideas que innovan el mundo.</h2>
      </div>
      <div className="about-copy">
        <p>
          Mi nombre es {portfolio.name}, un desarrollador en formación interesado en
          crear software que resuelva problemas reales.
        </p>
        <p>
          Me especializo en el backend, las aplicaciones móviles y las bases de datos.
          Estoy dispuesto a cualquier proyecto con tal aprender algo nuevo y mejorar.
        </p>
        <div className="skills" aria-label="Tecnologías">
          <span>Godot</span>
          <span>.NET / C#</span>
          <span>Flutter</span>
          <span>Java</span>
        </div>
      </div>
    </section>
  )
}
