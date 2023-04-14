"use client";
import React, { useEffect, useState } from "react";
import TitulosInternos from "../Inicio/TitulosInternos";
import ConvocatoriaItemNew from "./ConvocatoriaItemNew";

function Convocatorias() {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const convocatoria = await fetch("/api/convocatoria").then((res) =>
      res.json()
    );
    setData(convocatoria);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <TitulosInternos title="CONVOCATORIAS" />
      <div className="p-4 text-center mx-auto my-6 w-full lg:max-w-5xl drop-shadow rounded-md">
        {Object.keys(Data).length > 0 &&
          Data?.SedePrincipal?.convocatoria.length > 0 && (
            <details className="border-2 border-white bg-[#006F46] open:bg-[#005335] duration-300">
              <summary className="text-white font-medium bg-inherit px-5 py-3 text-lg cursor-pointer">
                <b className="text-2xl">{Data?.SedePrincipal?.nombre}</b>
              </summary>
              {Data?.SedePrincipal?.convocatoria?.map((item: any) => {
                return (
                  <>
                    <ConvocatoriaItemNew
                      title={item.titulo}
                      contenido={item.descripcion}
                      archivo={item.archivo}
                    />
                  </>
                );
              })}
            </details>
          )}

        {Object.keys(Data).length > 0 &&
          Data?.SedeAntonioNariño?.convocatoria.length > 0 && (
            <details className="border-2 border-white bg-[#006F46] open:bg-[#005335] duration-300">
              <summary className="text-white font-medium bg-inherit px-5 py-3 text-lg cursor-pointer">
                <b className="text-2xl">{Data?.SedeAntonioNariño?.nombre}</b>
              </summary>
              {Data?.SedeAntonioNariño?.convocatoria?.map((item: any) => {
                return (
                  <>
                    <ConvocatoriaItemNew
                      title={item.titulo}
                      contenido={item.descripcion}
                      archivo={item.archivo}
                    />
                  </>
                );
              })}
            </details>
          )}

        {Object.keys(Data).length > 0 &&
          Data?.SedeCentroPiloto?.convocatoria.length > 0 && (
            <details className="border-2 border-white bg-[#006F46] open:bg-[#005335] duration-300">
              <summary className="text-white font-medium bg-inherit px-5 py-3 text-lg cursor-pointer">
                <b className="text-2xl">{Data?.SedeCentroPiloto?.nombre}</b>
              </summary>
              {Data?.SedeCentroPiloto?.convocatoria?.map((item: any) => {
                return (
                  <>
                    <ConvocatoriaItemNew
                      title={item.titulo}
                      contenido={item.descripcion}
                      archivo={item.archivo}
                    />
                  </>
                );
              })}
            </details>
          )}
      </div>
    </div>
  );
}

export default Convocatorias;
