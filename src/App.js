export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mi Portafolio</h1>
          <nav>
            <ul className="flex gap-4">
              <li><a href="#about" className="hover:underline">Sobre mí</a></li>
              <li><a href="#experience" className="hover:underline">Experiencia</a></li>
              <li><a href="#achievements" className="hover:underline">Logros</a></li>
              <li><a href="#skills" className="hover:underline">Habilidades</a></li>
              <li><a href="#education" className="hover:underline">Educación</a></li>
              <li><a href="#contact" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20" id="about">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">¡Hola! Soy Juan José</h2>
            <p className="text-gray-600 max-w-2xl">
              Desarrollador FullStack Senior con experiencia en proyectos diversos, 
              desde implementaciones ágiles hasta desarrollos de gran alcance. Especializado en tecnologías frontend,
              con dominio de JavaScript y frameworks como React, Angular y Vue.js, además del uso de TypeScript para
              mejorar el rendimiento y la escalabilidad de aplicaciones. En el ámbito backend, 
              sólida experiencia en Java, Spring Boot y Liferay, con integración de bases de datos relacionales 
              (Oracle, MySQL, PostgreSQL) y no relacionales (MongoDB, Redis).
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src="/perfil.webp" alt="Juan José" className="rounded-full w-72 h-72 object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-100" id="experience">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Experiencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trabajo 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">SETI S.A.S</h3>
              <p className="text-gray-600">
                Junio 2024 - Actualmente<br />
                <strong>Consultor - Junior</strong><br />
                - DevOps | Java - Spring Boot | Angular<br />
                - Bases de datos relacionales: PostgreSQL<br />
                - Bases de datos no relacionales: MongoDB<br />
                - DevOps: Azure, Docker<br />
                - Nube: AWS
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">LinkTic S.A.S</h3>
              <p className="text-gray-600">
                Abril 2024 - Actualmente<br />
                Julio 2023 - Noviembre 2023<br />
                <strong>Desarrollador Backend - Semisenior</strong><br />
                - Backend: Java - Spring Boot, Hibernate, JPA<br />
                - Bases de datos relacionales: PostgreSQL<br />
                - Bases de datos no relacionales: MongoDB<br />
                - Nube: AWS
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">SoinsKarisma</h3>
              <p className="text-gray-600">
                Agosto 2023 - Octubre 2023<br />
                <strong>Desarrollador Frontend - Semisenior</strong><br />
                - Frontend: React JS, Redux, Node JS<br />
                - Diseño: Figma
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Stefanini Group</h3>
              <p className="text-gray-600">
                Agosto 2023 - Octubre 2023<br />
                <strong>Desarrollador Backend - Semisenior</strong><br />
                - Backend: Java - Spring Boot, Hibernate, JPA<br />
                - Frontend: Angular, TypeScript<br />
                - Bases de datos relacionales: PostgreSQL<br />
                - Bases de datos no relacionales: MongoDB
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">FundaSoftMiss</h3>
              <p className="text-gray-600">
                Enero 2020 - Abril 2023<br />
                <strong>Desarrollador Frontend - Semisenior</strong><br />
                - Frontend: Angular, TypeScript, React JS, React Native<br />
                - Backend: Node JS, Express JS<br />
                - Nube: AWS, S3, IAM<br />
                - Bases de datos relacionales: PostgreSQL<br />
                - Bases de datos no relacionales: MongoDB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100" id="skills">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-bold">Angular</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">React</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Vue.js</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">React Native</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Backend y DevOps</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-bold">Java</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Spring Boot</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Node.js</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Docker</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">AWS</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Bases de Datos</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-bold">PostgreSQL</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">MongoDB</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">SQL Server</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Oracle</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Otras Habilidades</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-bold">GIT</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Jenkins</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Liferay</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Azure</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">Python</label>
                  <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white" id="achievements">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Logros</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Como desarrollador FullStack Semisenior, he optimizado aplicaciones mediante TypeScript, mejorando su velocidad de carga en un 30% y garantizando escalabilidad. Diseñé sistemas fullstack con Angular y Spring Boot, automatizando procesos clave en un 40%, y lideré la migración de bases de datos (Oracle a PostgreSQL, MongoDB), reduciendo costos operativos en un 20%. Implementé microservicios con Java y Spring Boot, incrementando la capacidad de respuesta en entornos de alta demanda, y establecí estándares de calidad en Liferay, logrando una reducción del 25% en errores. Estas experiencias reflejan mi compromiso con soluciones robustas y escalables que aportan valor a las organizaciones.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-100" id="education">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Educación</h2>
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              <strong>Ingeniería de Sistemas</strong> (Finalizado)
            </p>
            <p className="text-gray-600">Corporación Universitaria del Huila - Corhuila</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 text-center" id="contact">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-600 mb-6">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        <div className="flex justify-center gap-4">
          <a href="https://wa.me/3218756308" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.webp" alt="WhatsApp" className="w-12 h-12" />
          </a>
          <a href="mailto:avilesroajuanjose@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/mail.webp" alt="Mail" className="w-12 h-12" />
          </a>
          <a href="https://www.linkedin.com/in/juan-jose-aviles-roa/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.webp" alt="LinkedIn" className="w-12 h-12" />
          </a>
          <a href="https://github.com/JJAR140201" target="_blank" rel="noopener noreferrer">
            <img src="/github.webp" alt="GitHub" className="w-12 h-12" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Juan José Avilés Roa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}