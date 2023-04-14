"use client";
import Image from "next/image";
import React from "react";
import TitulosInternos from "../Inicio/TitulosInternos";
import TramitesItem from "./TramitesItem";

const Tramites = () => {
  return (
    <>
      <TitulosInternos title="Gestión Documentos en Línea" />

      {/* component */}
      <section className="bg-white px-3">
        <div className="container py-10 mx-auto">
          <h1 className="font-bold text-[#003823] text-xl md:text-2xl lg:text-3xl text-center">
            Desde esta consulta realice la solicitud de documentos en línea,
            tales como:
          </h1>
          <div className="text-center mt-4 grid lg:grid-cols-2 items-center">
            <div className="p-4 w-full h-full flex flex-wrap flex-col justify-center bg-[#99C5B5] lg:rounded-l-xl">
              <TramitesItem
                numero="1."
                title="Certificados de Estudio Parciales."
              />
              <TramitesItem
                numero="2."
                title="Certificados de Estudio año Finalizado."
              />
              <TramitesItem numero="3." title="Actas de Grado." />
              <TramitesItem numero="4." title="Duplicados del Diploma." />
              <TramitesItem
                numero="5."
                title="Duplicados del Carnet Estudiantil."
              />
              <TramitesItem numero="6." title="Constancias de Estudio." />
              <TramitesItem
                numero="7."
                title="Constancias de Retiro de Estudiantes."
              />
              <TramitesItem numero="8." title="Constancias de Matrícula." />
              <TramitesItem numero="9." title="Certificación de Acudiente." />
              <TramitesItem
                numero="10."
                title="Constancias para Cajas de Compensación."
              />
              <TramitesItem numero="11." title="Retiro del SIMAT." />
              <TramitesItem numero="12." title="Otros..." />
            </div>
            <div
              onClick={() =>
                window.open(
                  `https://www.ensiibague.edu.co/sygescol${new Date().getFullYear()}/formularioCertificado.php`
                )
              }
              className="relative w-full h-full inline-grid over"
            >
              <Image
                className="!h-full cursor-pointer lg:rounded-r-xl grayscale hover:grayscale-0 hover:scale-105"
                src="/Tramites/Gdocumental.jpg"
                alt="Gdocumental"
                width={768}
                height={416}
              />
              <p
                style={{
                  filter: "drop-shadow(0px 0px 8px black)",
                  textShadow: "0px 0px 8px black",
                }}
                className="cursor-pointer text-3xl md:text-4xl lg:text-5xl absolute font-bold text-[#66A990] place-self-center"
              >
                Clic aquí
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tramites;
