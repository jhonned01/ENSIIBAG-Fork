"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CalendarioItemNew from "./CalendarioItemNew";
import TitulosInternos from "../Inicio/TitulosInternos";

function Index() {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const calendario = await fetch("/api/calendario").then((res) => res.json());
    setData(calendario);
  };

  console.log("Datacalendario", Data);

  useEffect(() => {
    GetData();
  }, []);

  const showCalendario = () => (
    <>
      {Data?.calendario?.length > 0 ? (
        <>
          {Data?.calendario.map((item: any) => {
            return (
              <div
                className="container px-2 md:mx-auto my-6 flex flex-col items-center gap-[2rem]"
                key={item.id}
              >
                <CalendarioItemNew
                  fecha={item.fecha}
                  imagen="/Servicios/calendarioItem1.jpg"
                  title={item.titulo}
                  contenido={item.descripcion}
                  archivo={item.archivo}
                />
              </div>
            );
          })}
        </>
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

  return (
    <div>
      <TitulosInternos title="Calendario de Actividades" />
      {showCalendario()}
    </div>
  );
}

export default Index;
