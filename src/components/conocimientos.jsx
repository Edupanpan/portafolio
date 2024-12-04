// Conocimientos.jsx
import React from 'react';
import '../index.css';

const Conocimientos = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className="shadow-[20px_20px_0px] shadow-primary-sombra p-6 m-8 w-full max-w-2xl bg-primary-botones text-primary-letra2">
        <h2 className="text-2xl font-semibold mb-4 text-primary-letra">Conocimientos</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary-sombra p-4 shadow-[6px_6px_0px] shadow-primary-sombra2 ">
            <h3 className="text-xl font-bold mb-2">Lenguajes de Programación</h3>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="bg-primary-sombra p-4  shadow-[6px_6px_0px] shadow-primary-sombra2">
            <h3 className="text-xl font-bold mb-2">Tecnologías</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-primary-sombra p-4 shadow-[6px_6px_0px] shadow-primary-sombra2">
            <h3 className="text-xl font-bold mb-2">Herramientas</h3>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>Docker</li>
              <li>Webpack</li>
              <li>VS Code</li>
            </ul>
          </div>
          <div className="bg-primary-sombra p-4 shadow-[6px_6px_0px] shadow-primary-sombra2">
            <h3 className="text-xl font-bold mb-2">Matemáticas</h3>
            <ul className="list-disc list-inside">
              <li>Álgebra</li>
              <li>Cálculo</li>
              <li>Estadística</li>
              <li>Matemáticas Discretas</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conocimientos;