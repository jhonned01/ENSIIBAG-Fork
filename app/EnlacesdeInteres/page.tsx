"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TitulosInternos from "../Inicio/TitulosInternos";
import EnlacesInteresItem from "./EnlacesInteresItem";

function Index() {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const enlacesInt = await fetch("/api/enlacesInt").then((res) => res.json());
    setData(enlacesInt);
  };

  useEffect(() => {
    GetData();
  }, []);

  //   console.log("enlacesInt", Data);

  const showEnlaces = () => (
    <>
      {Data?.enlacesInt?.length > 0 ? (
        <div className="container p-6 mx-auto flex flex-row flex-wrap justify-center gap-6">
          {Data?.enlacesInt.map((item: any) => {
            return (
              <div key={item.id}>
                <EnlacesInteresItem
                  title={item.titulo}
                  contenido={item.descripcion}
                  enlace={item.url}
                  imgEnlacesInt={item.imagen}
                />
              </div>
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

  return (
    <>
      <TitulosInternos title="Enlaces de Interés" />
      {showEnlaces()}
    </>
  );
}

export default Index;

// export async function getServerSideProps() {
//   try {
//     const enlacesInt = await fetch(`${process.env.APP_URL}api/enlacesInt`).then(
//       (res) => res.json()
//     );

//     if (enlacesInt[0]?.msn || enlacesInt[1]?.error) {
//       return {
//         props: {
//           enlacesInt: enlacesInt || [],
//         },
//       };
//     }
//     return {
//       props: {
//         enlacesInt: enlacesInt,
//       },
//     };
//   } catch (err) {
//     console.log("=============================");
//     console.log(err);
//     return {
//       props: {
//         enlacesInt: [
//           {
//             msn: "Fallo la conexión con el servidor si el error persiste contacte a soporte ",
//           },
//         ],
//       },
//     };
//   }
// }
