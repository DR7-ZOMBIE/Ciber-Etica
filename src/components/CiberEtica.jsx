// src/components/CiberEtica.jsx
import React, { useState } from 'react';

const CiberEtica = () => {
  const [openSections, setOpenSections] = useState({
    introduccion: false,
    seccion2: false,
    seccion3: false,
    conclusiones: false,
    analisis: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenedor principal: se expande para empujar el footer hacia abajo */}
      <div className="flex-grow p-4 md:p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Ciberética en la era digital
        </h1>

        {/* Sección 1: Introducción */}
        <section className="mb-6 border-b pb-4">
          <div 
            onClick={() => toggleSection('introduccion')}
            className="flex justify-between items-center cursor-pointer"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              1. Introducción: el paradigma digital en la era de la información
            </h2>
            <span className="text-2xl md:text-3xl font-bold">
              {openSections.introduccion ? '-' : '+'}
            </span>
          </div>
          {openSections.introduccion && (
            <div className="mt-4 text-justify text-gray-700 text-sm md:text-base">
              <p>
                El desarrollo de las relaciones económicas, políticas, sociales y culturales sobre una base tecnológica ha adquirido una dimensión particular en las últimas décadas. Esta nueva dimensión se ha caracterizado como globalización, fuertemente ligada a la economía de laissez faire, la globalización de mercados financieros y el mercado internacional. Además, se observan diversos predicados para su análisis: globalización ambiental, cultural, política, económica, de las comunicaciones, de los derechos humanos y de los riesgos e inseguridades.
              </p>
              <br />
              <p>
                <strong>Análisis de la globalización:</strong> Es vital entender que la globalización actual, impulsada por la información, representa el mayor marco de comportamiento. La capacidad de recolectar y analizar datos es el recurso más valioso hoy en día, permitiendo decisiones más acertadas y eficientes en las organizaciones.
              </p>
              <br />
              <p>
                Esta era, descrita por Manuel Castells como “la era de la información”, abre el debate sobre el impacto tecnológico y los desafíos éticos de una sociedad globalizada.
              </p>
              <br />
              <p>
                En Colombia, la protección de datos personales se regula a través de la Ley 1581 de 2012, que establece disposiciones generales para la protección de datos y garantiza derechos de acceso, actualización, rectificación y supresión. Esto obliga a las empresas a cumplir con normativas que salvaguarden la privacidad y seguridad de la información.
              </p>
              <br />
              <p>
                En este contexto, la CiberÉtica surge como un campo de estudio interdisciplinario que analiza los dilemas éticos en la era digital, alineándose también con la Ley 1273 de 2009 para combatir delitos informáticos. Se convierte en una herramienta esencial para promover un uso ético y responsable de la información.
              </p>
            </div>
          )}
        </section>

        {/* Sección 2: La CiberÉtica como ética aplicada entre la ética y la informática */}
        <section className="mb-6 border-b pb-4">
          <div 
            onClick={() => toggleSection('seccion2')}
            className="flex justify-between items-center cursor-pointer"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              2. La CiberÉtica como ética aplicada entre la ética y la informática
            </h2>
            <span className="text-2xl md:text-3xl font-bold">
              {openSections.seccion2 ? '-' : '+'}
            </span>
          </div>
          {openSections.seccion2 && (
            <div className="mt-4 text-justify text-gray-700 text-sm md:text-base">
              <p>
                En las sociedades pluralistas y democráticas, la ética se manifiesta de múltiples formas. La CiberÉtica surge en el contexto del avance tecnológico, donde la intersección entre informática, ética e información crea un nuevo campo de reflexión. Este enfoque interdisciplinario analiza la sociedad en la era de la información, abordando la relación entre la tecnología y los dilemas éticos.
              </p>
              <br />
              <p>
                Se orienta a promover valores como la privacidad, seguridad, transparencia y responsabilidad en el uso de la tecnología, constituyéndose en un marco para analizar y abordar desafíos éticos emergentes.
              </p>
            </div>
          )}
        </section>

        {/* Sección 3: Áreas y subáreas de la CiberÉtica */}
        <section className="mb-6 border-b pb-4">
          <div 
            onClick={() => toggleSection('seccion3')}
            className="flex justify-between items-center cursor-pointer"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              3. Áreas y subáreas de la CiberÉtica
            </h2>
            <span className="text-2xl md:text-3xl font-bold">
              {openSections.seccion3 ? '-' : '+'}
            </span>
          </div>
          {openSections.seccion3 && (
            <div className="mt-4 text-justify text-gray-700 text-sm md:text-base">
              <p>
                La CiberÉtica abarca tanto el soporte lógico-informático (hardware y software) como otras variables no tecnológicas. Entre sus áreas destacan:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <strong>Hardware:</strong> Se refiere a la parte física de los dispositivos, como teclados, ratones, pantallas, discos duros y memorias RAM. Incluye aspectos como la contaminación, reciclaje y la disponibilidad de hardware libre.
                </li>
                <li>
                  <strong>Software:</strong> Es el conjunto de programas y aplicaciones (sistemas operativos, programas de oficina, navegadores) que permiten el funcionamiento del hardware. Se diferencia entre software libre y no libre, y abarca temas de ciberseguridad y protección de datos.
                </li>
                <li>
                  <strong>Otras variables:</strong> Incluyen la vigilancia de comunicaciones, cibercrimen, ciberguerra, derechos digitales, Internet de las Cosas (IoT) y smart cities.
                </li>
              </ul>
            </div>
          )}
        </section>

        {/* Sección 4: Conclusiones: el Manifiesto de la ética hacker */}
        <section className="mb-6 border-b pb-4">
          <div 
            onClick={() => toggleSection('conclusiones')}
            className="flex justify-between items-center cursor-pointer"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              4. Conclusiones: el Manifiesto de la ética hacker en seis principios
            </h2>
            <span className="text-2xl md:text-3xl font-bold">
              {openSections.conclusiones ? '-' : '+'}
            </span>
          </div>
          {openSections.conclusiones && (
            <div className="mt-4 text-justify text-gray-700 text-sm md:text-base">
              <p>
                El término “hacker” ha evolucionado para representar una filosofía de acceso libre a la información, descentralización e innovación. Según Steven Levy, los seis principios son:
              </p>
              <ol className="list-decimal ml-6 mt-2 space-y-2">
                <li>Acceso ilimitado a los ordenadores y a la información.</li>
                <li>Toda información debe ser libre.</li>
                <li>Promover la descentralización y desconfiar de los poderes establecidos.</li>
                <li>Juzgar a los hackers por su labor y capacidad, sin criterios externos.</li>
                <li>La creación de arte y belleza en el entorno digital.</li>
                <li>La tecnología puede transformar la vida para mejor.</li>
              </ol>
              <br />
              <ol className="list-decimal ml-6 mt-2 space-y-2">
                <li>El acceso limitado se logra con restricciones de red por zonas, asegurando que cada grupo tenga lo que necesita.</li>
                <li>Si toda la información es libre, se entra en conflicto con la ley; en ciberinteligencia, analizar el ciberespacio es vulnerable y requiere regulación.</li>
                <li>La descentralización de la información puede generar puntos críticos en la infraestructura.</li>
                <li>Las capacidades de un hacker ético se centran en actuar bajo reglamentos y políticas de la organización.</li>
                <li>El arte en entornos digitales mejora la UX/UI, pero debe limitarse a mejorar la interacción sin aprovechar deficiencias psicológicas.</li>
                <li>La tecnología es la revolución digital: mejora la vida si se usa de forma ética y con restricciones adecuadas según la edad.</li>
              </ol>
            </div>
          )}
        </section>

        {/* Sección 5: Análisis experto en ciberseguridad */}
        <section className="mb-6 border-b pb-4">
          <div 
            onClick={() => toggleSection('analisis')}
            className="flex justify-between items-center cursor-pointer"
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              5. Análisis experto en ciberseguridad: perspectiva de Dennis Patrick Juilland Prada
            </h2>
            <span className="text-2xl md:text-3xl font-bold">
              {openSections.analisis ? '-' : '+'}
            </span>
          </div>
          {openSections.analisis && (
            <div className="mt-4 text-justify text-gray-700 text-sm md:text-base">
              <p>
                Es fundamental reconocer que la ciberética no se limita a un análisis técnico de las infraestructuras digitales, sino que implica un profundo debate filosófico y social sobre la libertad, la privacidad y la justicia en la era digital.
              </p>
              <p className="mt-2">
                Nuestro análisis destaca la necesidad de integrar conocimientos de diversas disciplinas para abordar los desafíos éticos del entorno digital. La convergencia de informática, filosofía y ciencias sociales exige un enfoque interdisciplinario que permita soluciones innovadoras y equitativas, sin perder de vista los riesgos de la globalización tecnológica.
              </p>
              <p className="mt-2">
                Además, la evolución constante de la tecnología demanda una revisión crítica y permanente de las normativas éticas para que se adapten a los cambios en la sociedad y garanticen el respeto a los derechos fundamentales. Esta propuesta invita a un diálogo abierto que fomente la descentralización y la participación activa de la comunidad en la construcción de un futuro digital más justo, capacitando a las personas en ciberseguridad.
              </p>
            </div>
          )}
        </section>

        {/* Bibliografía */}
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center">Bibliografía</h2>
          <div className="text-justify text-gray-700 text-sm md:text-base">
            <p>
              <strong>Barrera, Silvia (2012):</strong> “La lucha del Cuerpo Nacional de Policía contra las redes organizadas de pedofilia”, en: Seguridad Pública: retos actuales y perspectivas de futuro.
            </p>
            <p className="mt-2">
              <strong>Brandom, Robert (1994):</strong> Making it Explicit. Cambridge, Harvard University Press.
            </p>
            <p className="mt-2">
              <strong>Castells, Manuel (1998):</strong> La era de la información. Madrid, Alianza Editorial.
            </p>
          </div>
        </section>
      </div>
 
    </div>
  );
};

export default CiberEtica;
