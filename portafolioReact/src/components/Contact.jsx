export function Contact({ email, contactSent, onSubmit }) {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-inner">
        <p className="eyebrow">04 / Contacto</p>
        <h2>¿Tienes una idea? Hagámosla realidad.</h2>
        {contactSent ? (
          <p className="contact-success" role="status">
            Gracias por escribir. Me pondré en contacto contigo pronto.
          </p>
        ) : (
          <form className="contact-form" onSubmit={(event) => {
            event.preventDefault()
            onSubmit()
          }}>
            <label>
              <span>Tu nombre</span>
              <input name="name" required placeholder="Escribe tu nombre" />
            </label>
            <label>
              <span>Tu mensaje</span>
              <textarea name="message" required rows="1" placeholder="¿De qué trata tu proyecto?" />
            </label>
            <button className="button button-light" type="submit">
              Enviar mensaje <span aria-hidden="true">↗</span>
            </button>
          </form>
        )}
        <a className="contact-link" href={`mailto:${email}`}>{email}</a>
      </div>
    </section>
  )
}
