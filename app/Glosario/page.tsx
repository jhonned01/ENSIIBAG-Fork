"use client";
import React, { useEffect, useState } from "react";
import TitulosInternos from "../(Home)/TitulosInternos";
import Image from "next/image";
import GlosarioItem from "./GlosarioItem";
import SVGglosarioClose from "./SVGglosarioClose";
import SVGglosarioOpen from "./SVGglosarioOpen";

const Glosario = () => {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const preguntas = await fetch("/api/preguntas").then((res) => res.json());
    setData(preguntas);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <TitulosInternos title="Glosario" />

      {Data?.PreguntasGlosario?.preguntas?.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-4 p-4 text-center mx-auto my-6 w-full lg:max-w-5xl drop-shadow rounded-md">
          {Data?.PreguntasGlosario?.preguntas.map((item: any) => {
            return (
              <>
                <div className="w-full block mx-auto mb-[1.6rem]">
                  <div className="group">
                    <GlosarioItem
                      icono={<SVGglosarioClose />}
                      title={item.titulo}
                      icono2={<SVGglosarioOpen />}
                      contenido={item.contenido}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="container lg:w-[700px] flex flex-col p-4 mx-auto col-span-3">
          <Image
            className="object-cover"
            src="/Menu/PendienteWebMaster.png"
            width={1400}
            height={940}
            alt="PendienteWebMaster"
          />
          <p className="error">
            Registro pendiente por publicar desde WebMaster
          </p>
        </div>
      )}
    </>
  );
};

export default Glosario;
