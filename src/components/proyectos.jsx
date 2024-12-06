import React from 'react';
import '../index.css';

const Proyectos = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className="shadow-[20px_20px_0px] shadow-primary-sombra p-8 m-8 w-full max-w-4xl bg-primary-botones">
        <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>
        <p className="text-lg text-center mb-8">Aquí puedes ver algunos de mis proyectos iniciales.</p>
        
        <div className="text-primary-letra2 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Proyecto 1 */}
          <div className="p-8 bg-primary-sombra shadow-[6px_6px_0px] shadow-primary-sombra2 flex flex-col items-start justify-between h-full">
            <div>
              <p className="text-xl font-semibold mb-6 text-center">To do list</p>
              <ul className="list-disc list-inside text-left">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <a href="https://edupanpan.github.io/PROYECTOS/Desarrollo_web/todolist/">
              <button className="mt-6 bg-primary-letra2 text-primary-letra px-6 py-3 text-lg hover:bg-primary-sombra2">
                Ver Proyecto
              </button>
            </a>
          </div>

          {/* Proyecto 2 */}
          <div className="p-8 bg-primary-sombra shadow-[6px_6px_0px] shadow-primary-sombra2 flex flex-col items-start justify-between h-full">
            <div>
              <p className="text-xl font-semibold mb-6 text-center">Galería de imágenes</p>
              <ul className="list-disc list-inside text-left">
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <a href="https://edupanpan.github.io/desarrollo-web/#/">
              <button className="mt-6 bg-primary-letra2 text-primary-letra px-6 py-3 text-lg hover:bg-primary-sombra2">
                Ver Proyecto
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
