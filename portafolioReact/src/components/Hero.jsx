export function Hero({ portfolio }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">Portafolio personal / 2026</p>
        <h1>{portfolio.name}</h1>
        <p className="hero-role">{portfolio.role}</p>
        <p className="hero-description">{portfolio.bio}</p>
        <a className="button" href="#proyectos">
          Ver mi trabajo <span aria-hidden="true">↘</span>
        </a>
      </div>
    </section>
  )
}
