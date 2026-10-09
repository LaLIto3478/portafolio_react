export function Footer({ name, currentYear }) {
  return (
    <footer className="site-footer">
      <span>© {currentYear} {name}</span>
      <span>Todos los derechos reservados.</span>
    </footer>
  )
}
