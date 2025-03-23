// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#BDE0FE] text-black py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Ética en la IA. Todos los derechos reservados.
      </p>
      <br />
      <p className="text-sm">
        Hecho con ❤️ por el equipo: Dennis Patrick Juilland Prada &amp; Santiago Alejandro Pino Giraldo.
      </p>
    </footer>
  );
};

export default Footer;
