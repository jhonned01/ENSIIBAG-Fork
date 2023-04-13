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

  //   console.log("Data", Data);

  const showOfertasEmpleo = () => (
    <div className="container mx-auto p-4 gap-4 grid md:grid-cols-2 lg:grid-cols-3">
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

// export async function getServerSideProps() {
//   try {
//     const ofertasEmpleo = await fetch(
//       `${process.env.APP_URL}api/ofertasEmpleo`
//     ).then((res) => res.json());

//     if (ofertasEmpleo[0]?.msn || ofertasEmpleo[1]?.error) {
//       return {
//         props: {
//           ofertasEmpleo: ofertasEmpleo || [],
//         },
//       };
//     }
//     return {
//       props: {
//         ofertasEmpleo: ofertasEmpleo,
//       },
//     };
//   } catch (err) {
//     console.log("=============================");
//     console.log(err);
//     return {
//       props: {
//         ofertasEmpleo: [
//           {
//             msn: "Fallo la conexión con el servidor si el error persiste contacte a soporte ",
//           },
//         ],
//       },
//     };
//   }
// }
