const leadershipAreas = [
  {
    index: "01",
    title: "Arquitectura",
    description: "Definición y validación de soluciones, criterios de integración y decisiones de implementación.",
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
    period: "2017 — 2019",
    role: "Analista Desarrollador",
    company: "ZEKE · UTFSM",
    summary:
      "Desarrollo de una plataforma de autogestión para el ciclo completo de proyectos, desde postulación y ejecución hasta cierre.",
    points: [],
    stack: "Java 8 · Spring MVC · PrimeFaces · PostgreSQL · Angular",
  },
  {
    period: "2016 — 2017",
    role: "Desarrollador",
    company: "ZEKE · Ministerio de Educación",
    summary:
      "Construcción y puesta en marcha de sistemas para el Plan de Mejoramiento Educativo y el Sistema de Admisión Escolar.",
    points: [],
    stack: "Java 8 · Spring MVC · PrimeFaces · PostgreSQL",
  },
  {
    period: "2013 — 2016",
    role: "Ingeniero de Software / Desarrollador",
    company: "Eddvantage · Universidad de Chile",
    summary:
      "Desarrollo, despliegue y soporte de plataformas operativas, servicios académicos y soluciones alojadas en AWS.",
    points: [],
    stack: "Java · Spring MVC · JSF · PostgreSQL · Oracle · AWS",
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
          <a href="#stack">Stack</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="mailto:sergiofica@gmail.com">Conversemos <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="availability"><span aria-hidden="true" /> Disponible para desafíos de liderazgo técnico</div>
          <p className="eyebrow">Líder Técnico · Tech Lead</p>
          <h1>Conecto arquitectura, <em>equipos</em> y producción.</h1>
          <p className="hero-lead">
            Más de 13 años construyendo software para banca, medios de pago y servicios críticos. Convierto complejidad técnica en decisiones claras, entregas confiables y equipos que avanzan.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:sergiofica@gmail.com">Conversemos <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#experiencia">Ver trayectoria <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <aside className="leadership-system" aria-label="Sistema de liderazgo técnico">
          <div className="system-head">
            <span>Sistema de liderazgo</span>
            <span className="online"><i aria-hidden="true" /> En operación</span>
          </div>
          <div className="system-title">
            <p>Visión integral.</p>
            <strong>Ejecución precisa.</strong>
          </div>
          <div className="system-grid">
            {leadershipAreas.map((area) => (
              <article key={area.title}>
                <span>{area.index} · {area.index === "01" ? "DISEÑO" : area.index === "02" ? "FLUJO" : area.index === "03" ? "ECOSISTEMA" : "CONTINUIDAD"}</span>
                <h2>{area.title}</h2>
              </article>
            ))}
          </div>
          <p className="system-note"><span aria-hidden="true" /> Del diseño a la operación, sin perder contexto.</p>
        </aside>
      </section>

      <section className="metrics" aria-label="Cifras profesionales destacadas">
        <div><strong>13+</strong><span>Años de experiencia</span></div>
        <div><strong>10</strong><span>Personas por equipo</span></div>
        <div><strong>3</strong><span>Ambientes: DEV · UAT · PROD</span></div>
        <div><strong>360°</strong><span>Del diseño a producción</span></div>
      </section>

      <section className="profile section-shell" id="perfil">
        <div className="section-kicker"><span>01</span> Perfil profesional</div>
        <div className="profile-layout">
          <div>
            <h2 className="section-title">La tecnología funciona mejor cuando <em>las personas y el contexto</em> también están conectados.</h2>
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
          <h2 className="section-title">Trayectoria construida en <em>sistemas que no pueden fallar.</em></h2>
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
        <div className="section-kicker"><span>03</span> Stack & capacidades</div>
        <div className="stack-layout">
          <div className="stack-intro">
            <h2 className="section-title">Profundidad técnica para <em>tomar mejores decisiones.</em></h2>
            <p>
              Herramientas y plataformas son el medio. El objetivo es diseñar soluciones mantenibles, integrarlas con criterio y operarlas con continuidad.
            </p>
            <div className="education-card">
              <span>Formación</span>
              <strong>Ingeniero de Ejecución en Informática</strong>
              <p>Pontificia Universidad Católica de Valparaíso · 2014</p>
              <div><b>Scrum Master Certified</b><small>Marzo 2023</small></div>
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
          <h2>La curiosidad técnica también se construye fuera del guion.</h2>
        </div>
        <p>
          Tercer lugar en Expo Software PUCV por un proyecto de realidad aumentada orientado a educación básica. Formación complementaria en seguridad web, diseño de sistemas seguros, usabilidad, redes neuronales y desarrollo móvil.
        </p>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-grid" aria-hidden="true" />
        <div className="contact-copy">
          <div className="section-kicker"><span>05</span> Contacto</div>
          <h2>¿Tienes un desafío técnico que necesita <em>claridad y ejecución?</em></h2>
          <p>Conversemos sobre arquitectura, integración, delivery o liderazgo de equipos para servicios críticos.</p>
        </div>
        <div className="contact-actions">
          <a href="mailto:sergiofica@gmail.com" className="contact-email">sergiofica@gmail.com <span aria-hidden="true">↗</span></a>
          <div>
            <a href="https://www.linkedin.com/in/sergiofica" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="/sergio-fica-cv-2026.docx" download>Descargar CV <span aria-hidden="true">↓</span></a>
          </div>
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
