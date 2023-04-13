"use client";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import SedesItem from "../SedesItem";
import { useEffect, useState } from "react";

function SedePrincipal({ params: { sedesId } }: any) {
  // console.log("sede", sedesId);

  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const sede = await fetch(`/api/Sedes/${sedesId}`).then((res) => res.json());
    setData(sede.InfoSedes);
  };

  useEffect(() => {
    GetData();
  }, []);
  console.log("Data", Data);

  return (
    <div className="">
      <TitulosInternos title={Data?.nombre} />
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
    </div>
  );
}

export default SedePrincipal;

// export async function getServerSideProps(context) {
//   let { sede: sedes } = context.query;
//   console.log("--------------xd");
//   console.log(context.query.sedes);

//   const res = await fetch(
//     `${process.env.APP_URL}api/Sedes/${context.query.sedes}`
//   );
//   const sede = await res.json();

//   return {
//     props: {
//       sede: sede,
//     },
//   };
// }
