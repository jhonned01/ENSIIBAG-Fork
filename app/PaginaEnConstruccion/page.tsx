import Image from "next/image";
import React from "react";
import TitulosInternos from "../Inicio/TitulosInternos";

function PaginaEnConstruccion() {
  return (
    <div>
      <TitulosInternos title="Web en Construcción" />

      <div className="container mx-auto text-center p-4">
        <Image
          className="cursor-pointer object-cover m-auto"
          src="/ProcesosMatriculas/webConstruccion.webp"
          width={940}
          height={350}
          alt="webConstruccion"
        />
      </div>
    </div>
  );
}

export default PaginaEnConstruccion;
