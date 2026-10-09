import { useState } from 'react'
import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

const portfolio = {
  name: 'Víctor Córdoba',
  fullName: 'Víctor Eduardo Córdoba Bravo',
  role: 'Ingeniero de Software',
  bio: 'Estudiante de Ingeniería de Software con experiencia en desarrollo backend y móvil.',
  email: 'lalitoguicho7634@gmail.com',
}
const currentYear = new Date().getFullYear()

const projects = [
  {
    number: '01',
    title: 'El Ocaso',
    description: 'Videojuego RPG desarrollado en Godot Engine 4.5',
    category: 'Game development',
  },
  {
    number: '02',
    title: 'Librería El Puente',
    description: 'Punto de venta personalizado para la Librería El Puente. Desarrollado en .NET 8 y C#',
    category: 'Software',
  },
  {
    number: '03',
    title: 'MusicSync',
    description: 'Gestor de música local desarrollado en Flutter',
    category: 'Mobile',
  },
]

function App() {
  const [contactSent, setContactSent] = useState(false)

  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Hero portfolio={portfolio} />
        <About portfolio={portfolio} />
        <Projects projects={projects} />
        <Contact
          email={portfolio.email}
          contactSent={contactSent}
          onSubmit={() => setContactSent(true)}
        />
      </main>
      <Footer name={portfolio.fullName} currentYear={currentYear} />
    </div>
  )
}

export default App
