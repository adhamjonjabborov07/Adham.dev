import { useEffect, useState } from 'react'

const projects = [
  { n: '01', type: 'WEB DESIGN · DEVELOPMENT', title: 'Finora', desc: 'Moliyani boshqarishni oddiy va tushunarli qiluvchi zamonaviy dashboard.', className: 'finora', tag: 'FINORA', year: '2025' },
  { n: '02', type: 'E-COMMERCE · DEVELOPMENT', title: 'Noma Studio', desc: 'Mahalliy brend uchun tezkor va o‘ziga xos onlayn do‘kon tajribasi.', className: 'noma', tag: 'NOMA', year: '2025' },
  { n: '03', type: 'PRODUCT · FRONTEND', title: 'Focusly', desc: 'Jamoalarga vazifalarni tartibga solish va diqqatni saqlashga yordam beruvchi ilova.', className: 'focusly', tag: 'FOCUSLY', year: '2024' },
]

function Arrow({ down = false }) { return <span aria-hidden="true">{down ? '↓' : '↗'}</span> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: .12 })
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))
    return () => reveal.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  return (
    <>
      <header>
        <a className="logo" href="#top" onClick={closeMenu} aria-label="Bosh sahifa">ADHAM<span>.</span></a>
        <nav className={menuOpen ? 'open' : ''} aria-label="Asosiy navigatsiya">
          <a href="#projects" onClick={closeMenu}>Loyihalar</a>
          <a href="#about" onClick={closeMenu}>Men haqimda</a>
          <a href="#contact" onClick={closeMenu}>Aloqa</a>
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menyuni ochish" aria-expanded={menuOpen}>{menuOpen ? '×' : '☰'}</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="eyebrow"><i /> SALOM, MEN ADHAM</div>
          <h1>G‘oyalarni<br /><em>raqamli tajribaga</em><br />aylantiraman.</h1>
          <div className="hero-bottom">
            <p>Men foydalanuvchi uchun qulay, tezkor va estetik veb-saytlar yaratuvchi frontend dasturchiman.</p>
            <a className="round-link" href="#projects" aria-label="Loyihalarni ko‘rish"><Arrow down /></a>
          </div>
          <div className="orb orb-one" /><div className="orb orb-two" />
        </section>

        <section className="projects" id="projects">
          <div className="section-heading reveal"><span>01 / TANLANGAN ISHLAR</span><h2>Har bir loyiha —<br />yangi bir <em>hikoya.</em></h2></div>
          <div className="project-list">
            {projects.map((project) => <article className="project reveal" key={project.title}>
              <div className={`project-visual ${project.className}`}>
                <span className="project-year">{project.year}</span>
                <strong>{project.tag}</strong>
                <span className="visual-line" />
              </div>
              <div className="project-copy">
                <div><span className="project-number">{project.n}</span><small>{project.type}</small><h3>{project.title}</h3><p>{project.desc}</p></div>
                <a href="#contact" aria-label={`${project.title} loyihasi haqida so‘rash`}><Arrow /></a>
              </div>
            </article>)}
          </div>
        </section>

        <section className="about reveal" id="about">
          <div className="about-label">02 / MEN HAQIMDA</div>
          <div className="about-content">
            <h2>Chiroyli dizayn va<br /><em>toza kod</em> orasidagi<br />muvozanat.</h2>
            <div className="about-note"><p>Maqsadim — shunchaki ishlaydigan emas, balki esda qoladigan mahsulot yaratish. Har bir detal, animatsiya va kod qatori yagona tajribaga xizmat qiladi.</p><a href="#contact">Birga ishlaymiz <Arrow /></a></div>
          </div>
          <div className="stats"><div><strong>03+</strong><span>YIL TAJRIBA</span></div><div><strong>24</strong><span>YAKUNLANGAN LOYIHA</span></div><div><strong>100%</strong><span>E'TIBOR VA SIFAT</span></div></div>
        </section>

        <section className="contact" id="contact">
          <span className="reveal">03 / ALOQA</span>
          <h2 className="reveal">Biror ajoyib narsa<br /><em>yaratamizmi?</em></h2>
          <a className="email reveal" href="mailto:hello@adham.dev">hello@adham.dev <Arrow /></a>
          <footer><a className="logo" href="#top">ADHAM<span>.</span></a><p>© 2026 · TOSHKENT, UZBEKISTAN</p><div><a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN</a></div></footer>
        </section>
      </main>
    </>
  )
}
