"use client";
import React from "react";
import TitulosInternos from "../Inicio/TitulosInternos";
import ItemSubMenu from "../Inicio/ItemSubMenu";

const TalentoHumano = () => {
  // const router = useRouter();
  return (
    <div className="">
      <TitulosInternos title="Talento Humano" />
      <section className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2  min-h-sm sm:max-w-lg  md:max-w-4xl mx-auto bg-gray-50 lg:grid-cols-3 lg:max-w-[85rem] ">
        <ItemSubMenu
          title="ADMINISTRATIVOS"
          img="/Directorio/administrativosDIRECT.webp"
          click="/TalentoHumano/Administrativo"
          // click={() => router.push("/TalentoHumano/Administrativo")}
        />
        <ItemSubMenu
          title="DIRECTIVOS DOCENTES"
          img="/Directorio/directivosDIRECT.webp"
          click="/TalentoHumano/DirectivosDocentes"
        />
        <ItemSubMenu
          title="DOCENTES"
          img="/Directorio/docentesDIRECT.webp"
          click="/TalentoHumano/Docentes"
          // click={() => router.push("/TalentoHumano/Docentes")}
        />
        <ItemSubMenu
          className="lg:col-span-3"
          title="CONTRATISTAS"
          img="/Directorio/contratistasDIRECT.webp"
          click="/TalentoHumano/Contratistas"
          // click={() => router.push("/TalentoHumano/Contratistas")}
        />
      </section>
    </div>
  );
};

export default TalentoHumano;
