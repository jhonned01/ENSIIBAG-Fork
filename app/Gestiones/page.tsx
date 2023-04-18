"use client";
import React, { useEffect, useState } from "react";
import TitulosInternos from "../Inicio/TitulosInternos";
import ModulosIteam from "../Inicio/ModulosIteam";

const Gestiones = () => {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const Gestiones = await fetch("/api/Rutas/Gestiones").then((res) =>
      res.json()
    );
    setData(Gestiones);
  };

  useEffect(() => {
    GetData();
  }, []);

  const showData = () => {
    return (
      <div className="container gap-6 py-6 flex flex-row flex-wrap mx-auto bg-gray-50 justify-center">
        {Data?.gestiones?.map((gestion: any) => {
          return (
            <div className="" key={gestion.idMenu}>
              <ModulosIteam
                img={gestion.imagen || "/gestionDirectiva/gestionCalidad.webp"}
                title={gestion.titulo}
                moduloIteam={gestion.submenus}
                links={gestion.links}
                Dynamic={gestion.Dinamic}
              />
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="bg-gray-50">
      <TitulosInternos title="Gestiones" />
      {showData()}
    </div>
  );
};

export default Gestiones;
