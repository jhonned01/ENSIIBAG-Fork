"use client";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import SedesItem from "../SedesItem";
import { useEffect, useState } from "react";

function SedePrincipal({ params: { sedesId } }: any) {
  // console.log("sede", sedesId);

  const [Data, setData] = useState({} as any);

  useEffect(() => {
    const GetData = async () => {
      const sede = await fetch(`/api/Sedes/${sedesId}`).then((res) =>
        res.json()
      );
      setData(sede.InfoSedes);
    };
    if (sedesId) {
      GetData();
    }
  }, [sedesId]);
  console.log("Data", Data);

  return (
    <div className="">
      <TitulosInternos title={Data?.nombre} />

      {Object.keys(Data).length > 0 ? (
        <>
          <SedesItem
            imgSede={`https://ensiibague.edu.co/portal/img/${Data?.imagen}`}
            title={`${Data?.nombre}`}
            contenido={`Dirección: ${Data?.direccion}`}
            title3="LINEAS DE ATENCIÓN"
            contenido3={`Teléfonos: ${Data?.telefonos}`}
            correo={`${Data?.correo}`}
            title4="PUNTO DE ATENCIÓN"
            contenido4={`Dirección: ${Data?.direccion}`}
            title2="HORARIOS DE ATENCIÓN"
            contenido2={`${Data?.horarios}`}
          />
        </>
      ) : (
        <>
          <div className="flex items-center justify-center min-h-screen">
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-8 h-8 border-4 border-[#006f46] rounded-full animate-spin"
            />
            <p className="ml-2">Cargando...</p>
          </div>
        </>
      )}
    </div>
  );
}

export default SedePrincipal;
