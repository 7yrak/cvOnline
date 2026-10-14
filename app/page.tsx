const leadershipAreas = [
  {
    index: "01",
    title: "Apoyo a arquitectura",
    description: "Colaboración con Arquitectura en la definición y validación de soluciones y criterios de integración.",
  },
  {
    index: "02",
    title: "Delivery",
    description: "Estimaciones, capacity, dependencias, riesgos e hitos convertidos en planes ejecutables.",
  },
  {
    index: "03",
    title: "Integraciones",
    description: "APIs, Kafka, MQ, HUBs, portales, procesos batch y datos conectados con propósito.",
  },
  {
    index: "04",
    title: "Producción",
    description: "Ambientes, despliegues, migración, rollback y continuidad para operar con confianza.",
  },
];

const experience = [
  {
    period: "NOV 2023 — ACTUALIDAD",
    role: "Líder Técnico",
    company: "Evertec",
    summary:
      "Liderazgo técnico y delivery de proyectos de desarrollo e integración para clientes financieros y de servicios de alta criticidad.",
    points: [
      "Coordinación de equipos de hasta 10 personas y articulación entre Desarrollo, Arquitectura, Infraestructura, DBA, Seguridad, Redes, Operaciones y Producción.",
      "Gestión integral de estimaciones, capacity, planes de trabajo, dependencias, riesgos, hitos y fechas de entrega.",
      "Habilitación de ambientes DEV, UAT y PROD; liderazgo de instalaciones, migraciones, rollback y procesos CMDB / CAP / CAB.",
    ],
    stack: "Java · Spring Boot · Angular · Oracle · PostgreSQL · Kafka · Docker · Jenkins · Linux",
    featured: true,
  },
  {
    period: "MAR 2019 — OCT 2023",
    role: "Application Development Supervisor / Backend Lead",
    company: "Accenture · Proyecto Transbank",
    summary:
      "Liderazgo de equipo, evolución de interfaces y microservicios, y soporte de componentes críticos del ecosistema de pagos.",
    points: [
      "Estimación, planificación, seguimiento de tareas y gestión de capacity para un equipo de cinco personas.",
      "Desarrollo y mantenimiento de interfaces, microservicios y procesos ETL con Spring Batch.",
      "Análisis de requerimientos, propuestas de solución, automatizaciones, incidentes y pasos a producción.",
    ],
    stack: "Java 8 · Spring Boot · Spring Batch · Kafka · Oracle · DataStage · Maven · REST / SOAP",
  },
  {
    period: "ABR 2017 — FEB 2019",
    role: "Analista Desarrollador",
    company: "ZEKE · UTFSM",
    summary:
      "Desarrollo de una plataforma de autogestión para el ciclo completo de proyectos, desde postulación y ejecución hasta cierre.",
    points: [],
    stack: "Java 8 · Spring MVC · PrimeFaces · PostgreSQL · Angular",
  },
  {
    period: "MAR 2016 — MAR 2017",
    role: "Desarrollador",
    company: "ZEKE · Ministerio de Educación",
    summary:
      "Construcción y puesta en marcha de sistemas para el Plan de Mejoramiento Educativo y el Sistema de Admisión Escolar.",
    points: [],
    stack: "Java 8 · Spring MVC · PrimeFaces · PostgreSQL",
  },
  {
    period: "MAY 2014 — MAR 2016",
    role: "Ingeniero de Software",
    company: "Eddvantage",
    summary: "Desarrollo, puesta en marcha y mantenimiento de las plataformas Logistics y Engage Me. Configuración y mantenimiento de servidores en AWS.",
    points: [],
    stack: "Java 8 · Spring MVC · PrimeFaces · PostgreSQL · AWS",
  },
  {
    period: "MAR 2013 — FEB 2014",
    role: "Desarrollador de Software",
    company: "Universidad de Chile",
    summary: "Desarrollo y mantenimiento de Catálogo de Asignaturas, Portafolio de Alumnos y Asignación Académica, con soporte posterior a producción.",
    points: [],
    stack: "Java · Spring MVC · JSF · Oracle",
  },
];

const stackGroups = [
  {
    title: "Backend",
    items: ["Java / J2EE", "Spring Boot", "Spring MVC", "Spring Batch", "Spring Security", "MyBatis"],
  },
  {
    title: "Frontend",
    items: ["Angular", "JavaScript", "PrimeFaces", "JSF", "JSP", "Chart.js"],
  },
  {
    title: "Integración & datos",
    items: ["REST", "SOAP", "Kafka", "MQ", "ETL", "PostgreSQL", "Oracle", "SQL Server"],
  },
  {
    title: "Plataformas & delivery",
    items: ["Linux", "Docker", "Jenkins", "Git", "Nexus", "Maven", "Tomcat", "AWS"],
  },
];

const clients = ["Santander", "BICE", "Entel", "Consumer", "Banbif", "JP Morgan", "Banco Popular Dominicano", "Transbank"];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#perfil">Saltar al contenido</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Sergio Fica, volver al inicio">
          <span className="brand-mark" aria-hidden="true">SF</span>
          <span>
            <strong>Sergio Fica</strong>
            <small>Líder Técnico</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#perfil">Perfil</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#stack">Tecnologías</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="mailto:sergiofica@gmail.com">Conversemos <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Ingeniero informático · Líder técnico</p>
          <h1>Sergio Fica<span>Troncoso.</span></h1>
          <p className="hero-role">Tech Lead <span aria-hidden="true">/</span> Integración & delivery</p>
          <p className="hero-lead">
            Más de 13 años de experiencia en software, banca y medios de pago. Liderazgo de equipos y coordinación técnica para llevar soluciones desde su definición hasta producción.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/sergio-fica-cv-2026.pdf" download>Descargar CV en PDF <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="#experiencia">Ver experiencia <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <aside className="professional-card" aria-label="Información profesional">
          <span className="card-label">Perfil profesional</span>
          <div className="card-monogram" aria-hidden="true">SF<span>.</span></div>
          <h2>Liderazgo técnico.<br />Visión integral.</h2>
          <p>Arquitectura, equipos e integración de sistemas en entornos de alta criticidad.</p>
          <dl>
            <div><dt>Actualmente</dt><dd>Líder Técnico en Evertec</dd></div>
            <div><dt>Ubicación</dt><dd>Curauma, Valparaíso · Chile</dd></div>
            <div><dt>Especialidad</dt><dd>Banca & medios de pago</dd></div>
          </dl>
          <a href="https://www.linkedin.com/in/sergiofica" target="_blank" rel="noreferrer">Ver perfil en LinkedIn <span aria-hidden="true">↗</span></a>
        </aside>
      </section>

      <section className="metrics" aria-label="Cifras profesionales destacadas">
        <div><strong>13+</strong><span>Años de experiencia</span></div>
        <div><strong>Hasta 10</strong><span>Personas en equipos liderados</span></div>
        <div><strong>Desde 2013</strong><span>Trayectoria en software</span></div>
        <div><strong>Banca & pagos</strong><span>Experiencia sectorial</span></div>
      </section>

      <section className="profile section-shell" id="perfil">
        <div className="section-kicker"><span>01</span> Perfil profesional</div>
        <div className="profile-layout">
          <div>
            <h2 className="section-title">Experiencia técnica.<br /><em>Liderazgo con perspectiva.</em></h2>
          </div>
          <div className="profile-copy">
            <p>
              Soy Ingeniero de Ejecución en Informática y actualmente lidero técnicamente proyectos en Evertec. Trabajo junto a Arquitectura para definir y validar soluciones, y coordino a las áreas necesarias para convertirlas en servicios operando de forma segura.
            </p>
            <p>
              Mi fortaleza está en moverme entre la profundidad técnica y la coordinación ejecutiva: entiendo el detalle de una integración, pero también sus dependencias, riesgos, fechas, ambientes y consecuencias en producción.
            </p>
          </div>
        </div>

        <div className="leadership-cards">
          {leadershipAreas.map((area) => (
            <article key={area.title}>
              <span>{area.index}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-shell" id="experiencia">
        <div className="section-kicker"><span>02</span> Experiencia</div>
        <div className="section-heading-row">
          <h2 className="section-title">Trayectoria profesional.</h2>
          <p>Desde el desarrollo de software hasta el liderazgo técnico, con foco sostenido en integración, continuidad y delivery.</p>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article className={job.featured ? "job job-featured" : "job"} key={`${job.company}-${job.period}`}>
              <div className="job-period"><span aria-hidden="true" />{job.period}</div>
              <div className="job-main">
                <div className="job-heading">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  {job.featured && <span className="current-badge">Actual</span>}
                </div>
                <p className="job-summary">{job.summary}</p>
                {job.points.length > 0 && (
                  <ul>
                    {job.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                )}
                <p className="job-stack">{job.stack}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="clients" aria-label="Clientes y organizaciones">
        <p>Experiencia en iniciativas para</p>
        <div>
          {clients.map((client) => <span key={client}>{client}</span>)}
        </div>
      </section>

      <section className="stack section-shell" id="stack">
        <div className="section-kicker"><span>03</span> Tecnologías y formación</div>
        <div className="stack-layout">
          <div className="stack-intro">
            <h2 className="section-title">Tecnologías &<br /><em>formación.</em></h2>
            <p>
              Herramientas y plataformas son el medio. El objetivo es diseñar soluciones mantenibles, integrarlas con criterio y operarlas con continuidad.
            </p>
            <div className="education-card">
              <span>Formación</span>
              <strong>Ingeniero de Ejecución en Informática</strong>
              <p>Pontificia Universidad Católica de Valparaíso · 2014</p>
              <div><b>Scrum Master Certified</b><small>Marzo 2023</small></div>
              <p className="languages">Español nativo · Inglés básico</p>
            </div>
          </div>
          <div className="stack-groups">
            {stackGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="recognition section-shell">
        <div className="recognition-index">04</div>
        <div>
          <span>Reconocimiento</span>
          <h2>Innovación aplicada a la educación.</h2>
        </div>
        <p>
          Tercer lugar en Expo Software PUCV por un proyecto de realidad aumentada orientado a educación básica. Formación complementaria en seguridad web, diseño de sistemas seguros, usabilidad, redes neuronales y desarrollo móvil.
        </p>
      </section>

      <section className="contact" id="contacto">
        
        <div className="contact-copy">
          <div className="section-kicker"><span>05</span> Contacto</div>
          <h2>Hablemos de tu<br /><em>próximo proyecto.</em></h2>
          <p>Conversemos sobre arquitectura, integración, delivery o liderazgo de equipos para servicios críticos.</p>
        </div>
        <div className="contact-actions">
          <a href="mailto:sergiofica@gmail.com" className="contact-email">sergiofica@gmail.com <span aria-hidden="true">↗</span></a>
          <div>
            <a href="https://www.linkedin.com/in/sergiofica" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="/sergio-fica-cv-2026.pdf" download>Descargar PDF <span aria-hidden="true">↓</span></a>
          </div>
          <a className="contact-phone" href="tel:+56968615626">+56 9 6861 5626</a>
          <p>Curauma, Valparaíso · Modalidad híbrida en Santiago: 1 día presencial por semana</p>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio" aria-label="Sergio Fica, volver al inicio">
          <span className="brand-mark" aria-hidden="true">SF</span>
          <span><strong>Sergio Fica</strong><small>Líder Técnico</small></span>
        </a>
        <p>Arquitectura · Equipos · Producción</p>
        <a href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a>
      </footer>
    </main>
  );
}
