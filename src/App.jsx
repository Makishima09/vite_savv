import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import savLogo from './assets/isotype_white.png'
import savvilyLogo from './assets/logo_white.png'
import portada from './assets/codigo-sostenible.png'
import autor from './images/carlosble.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <div className='banner'>
        <a href='#' className='urlbanner'><u>SUSCRÍBETE A NUESTRA NEWSLETTER</u></a>
      </div>
      <nav>
      <div className='container'>
          <a href='#'>
            <img src={savLogo} className='logov' alt="Sav logo"/>
            <img src={savvilyLogo} className='logov'/>
          </a>
       
          <div className='navbar'>
            <ul>
              <li><a href='#' className='intern'>acerca</a></li>
              <li><a href='#' className='intern'>libros</a></li>
              <li><a href='#' className='intern'>cursos</a></li>
              <li><a href='#'>podcast</a></li>
            </ul>
          </div>
          <div className='publicButton'>
            <div className='publicar'>
              <a href='#'>Publicar</a>
            </div>
          </div>
      </div>
      </nav>
        
      </header>
      <div className='book'>
        <section id='description'>
          <div className='container'>
            <div className='subcontainer'>
              <img className='cover' src={portada}/>
              <article className='details'>
                <header>
                  <h1>Código Sostenible</h1>
                </header>
                  <section className='content'>
                    <strong>Cómo programar código fácil de mantener</strong>
                    <br/>
                        El libro que nos hubiera gustado tener entre nuestras manos cuando
                        estábamos aprendiendo a programar.
                        Una guía para quienes buscan la satisfacción del código bien hecho.
                        ¿Te has planteado alguna vez cómo sería
                        programar sin prisas, sin parches y sin chapuzas?
                        Tras veinte años de carrera como programador, consultor, conferenciante y formador,
                        Carlos Blé plasma lo mejor de sus enseñanzas en este libro.
                        <p>
                          <i>
                          “Cada vez escuchamos más eso de que en el desarrollo de software
                          está todo inventado, pero apuesto a que al finalizar este libro
                          compartiremos que publicaciones como esta aportan valor a la profesión”
                          </i>
                    <br/>
                          
                        Javier Ferrer, co-fundador de Codely.tv
                        </p>
                  </section>
                <div className='grupoboton'>
                  <a href='#'>
                    <button>Comprar YA</button>
                  </a>
                  <a href='#'>
                    <button>Muestra Gratuita</button>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id='autor'>
          <div className='container'>
            <h1>Carlos Blé</h1>
            <div className='subcontainer'>
              <article className='left'>
                <h2>La constancia es una clave del éxito</h2>
                <h3><a href='#' target='_blank' >Web Personal</a></h3>
                <section className='content'>
                Hoy soy fundador y director de Lean Mind una empresa canaria cuyo equipo 
                trabaja para que otras empresas tecnológicas desarrollen software de calidad a tiempo. 
                Escribí mi primera línea de código a los diez años, copiándola de un libro de BASIC 
                que tenía mi padre a su intel 8086. Fui usuario de AMIGA y miembro de su comunidad 
                en la niñez y adolescencia.
                <p className='hiddenContent'>
                  Entusiasta del software libre desde que descubrí GNU/Linux en 1999. Oficialmente, 
                  obtuve mi primer puesto de trabajo como programador en 2002. He sido consultor, 
                  mentor y desarrollador independiente desde 2009, apoyando a equipos y organizaciones 
                  en toda España y varios países de Europa. Practico XP (eXtreme Programming) desde 2008 
                  y soy autor del primer libro en castellano sobre Test-Driven Development. Como ponente, 
                  tengo más de cien charlas a mis espaldas. Me definiría como un backend developer, 
                  usando especialmente JavaScript, C#, Java y Python.
                </p>
                </section>
                <button className='autor-readmore'>
                  Leer Más
                </button>
              </article>
              <article className='right' /*style={"background-image:url('/images/carlosble.png')"}*/>
              <img className='autor-pic' src={autor}/>
              </article>
            </div>
          </div>
        </section>

      </div>
     
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
