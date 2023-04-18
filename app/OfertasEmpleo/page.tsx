"use client";
import Image from "next/image";
import OfertaEmpleoItem from "./OfertaEmpleoItem";
import TitulosInternos from "../Inicio/TitulosInternos";
import React, { useEffect, useState } from "react";

function OfertasEmpleo() {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const ofertasEmpleo = await fetch("/api/ofertasEmpleo").then((res) =>
      res.json()
    );
    setData(ofertasEmpleo);
  };

  useEffect(() => {
    GetData();
  }, []);

  const showOfertasEmpleo = () => (
    <div className="container mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center p-4 gap-4">
      {Data?.ofertasEmpleo?.length > 0 ? (
        <>
          {Data?.ofertasEmpleo?.map((item: any) => {
            return (
              <div key={item.id}>
                <OfertaEmpleoItem
                  contenido={item.consulta}
                  cargo={item.cargo}
                  contacto={item.contacto}
                  estado={item.estadovacante}
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
    </div>
  );

  return (
    <>
      <TitulosInternos title="Ofertas de Empleo" />
      {showOfertasEmpleo()}
    </>
  );
}

export default OfertasEmpleo;
