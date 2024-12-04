// Proyectos.jsx
import React from 'react';
import '../index.css';

const Proyectos = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className="shadow-[20px_20px_0px] shadow-primary-sombra p-6 m-8 w-full max-w-2xl bg-primary-botones">
        <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
        <p>Aquí puedes ver algunos de mis proyectos recientes.</p>
      </section>
    </div>
  );
};

export default Proyectos;