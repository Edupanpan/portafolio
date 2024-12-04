// Presentacion.jsx
import React from 'react';
import '../index.css';

const Presentacion = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-7xl font-bold m-40 text-primary-letra">Mi Portafolio</h1>
      <section className="shadow-[20px_20px_0px] shadow-primary-sombra p-6 m-8 w-full max-w-2xl bg-primary-botones">
        <h2 className="text-2xl font-semibold mb-4 text-primary-letra">Sobre Mí</h2>
        <p className="text-primary-letra ">
          Hola, mi nombre es Eduardo Silva. Soy estudiante de Ingeniería Civil Informática en la Universidad Autónoma de Chile y acabo de finalizar mi tercer año de carrera. Durante este tiempo, he adquirido conocimientos sólidos en diversas tecnologías, lenguajes de programación y matemáticas, los cuales me han permitido desarrollar habilidades clave para mi formación profesional.
        </p>
      </section>
    </div>
  );
};

export default Presentacion;