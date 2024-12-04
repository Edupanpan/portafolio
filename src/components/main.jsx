import React from 'react';
import '../index.css';
const Main = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-center text-7xl font-bold mb-40 text-primary-botones">Mi Portafolio</h1>
            <section className=" rounded-lg p-6 m-4 w-full max-w-2xl bg-primary-botones shadow-[6px_6px_0px] shadow-primary-sombra">
                <h2 className="text-2xl font-bold mb-4 text-primary-letra">Sobre Mí</h2>
                <p className='text-primary-letra text-xl font-semibold'>
                    Hola mi nombre es Eduardo Silva, actualmente soy estudiante de Ingenieria Civil Informatica en la Universidad Autonoma de Chile.
                </p>
            </section>
            <section className="shadow-md rounded-lg p-6 m-4 w-full max-w-2xl">
                <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
                <p>
                    Aquí puedes ver algunos de mis proyectos recientes.
                </p>
            </section>
                
        </div>
    );
};

export default Main;
