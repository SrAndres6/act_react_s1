'use client';

import Usuario from '../components/Usuario';

export default function Home() {
  const usuarios = [
    { nombre: 'Adres García', edad: 18, ciudad: 'medellin' },
    { nombre: 'james holl', edad: 25, ciudad: 'new york' },
    { nombre: 'María López', edad: 20, ciudad: 'Valencia' },
  ];

  const saludar = (nombre) => {
    alert(`¡Hola, ${nombre}!`);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
      {usuarios.map((usuario, index) => (
        <Usuario key={index} usuario={usuario} saludar={saludar} />
      ))}
    </main>
  );
}