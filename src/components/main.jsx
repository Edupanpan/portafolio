import React from 'react';
import '../index.css';
const Main = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <header className="w-full py-4">
                <h1 className="text-center text-3xl font-bold">Mi Portafolio</h1>
            </header>
            <main className="flex flex-col items-center justify-center flex-1 w-full px-4">
                <section className="shadow-md rounded-lg p-6 m-4 w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold mb-4">Sobre Mí</h2>
                    <p>
                        Hola, soy un desarrollador web con experiencia en React y Tailwind CSS.
                    </p>
                </section>
                <section className="shadow-md rounded-lg p-6 m-4 w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
                    <p>
                        Aquí puedes ver algunos de mis proyectos recientes.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Main;
