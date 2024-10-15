// src/components/FeaturesSection.tsx
import { FaSuitcase, FaLock, FaClipboardCheck, FaUsers } from 'react-icons/fa';

export function FeatureSection(){
  return (
    <section className=" py-16">
      <div className="container mx-auto text-center">
        {/* Título principal */}
        <h2 className="text-4xl font-bold text-black mb-6">
          Todo lo que necesitas está aquí
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Khimich Store trae las pilas puestas, calidad, precio, comodidad y estilo a tu alcance.
        </p>
        
        {/* Contenedor de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          
          {/* Característica 1 */}
          <div className="flex flex-col items-center">
            <FaSuitcase className="text-5xl text-black mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">Estilo</h3>
            <p className="text-gray-700">
              Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.
            </p>
          </div>

          {/* Característica 2 */}
          <div className="flex flex-col items-center">
            <FaLock className="text-5xl text-black mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">100% Seguro y rápido</h3>
            <p className="text-gray-700">
              Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.
            </p>
          </div>

          {/* Característica 3 */}
          <div className="flex flex-col items-center">
            <FaClipboardCheck className="text-5xl text-black mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">100% Calidad</h3>
            <p className="text-gray-700">
              Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.
            </p>
          </div>

          {/* Característica 4 */}
          <div className="flex flex-col items-center">
            <FaSuitcase className="text-5xl text-black mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">Plan separe</h3>
            <p className="text-gray-700">
              Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.
            </p>
          </div>

          {/* Característica 5 */}
          <div className="flex flex-col items-center">
            <FaUsers className="text-5xl text-black mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">Venta por mayor y al detal</h3>
            <p className="text-gray-700">
              Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


