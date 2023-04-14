"use client";
import Image from "next/image";
import TitulosInternos from "../Inicio/TitulosInternos";
import InfoNinosItem from "./InfoNinosItem";
import { useEffect, useState } from "react";

function Index({ infoNino }: any) {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const infoNino = await fetch("/api/infoNino").then((res) => res.json());
    setData(infoNino);
  };

  useEffect(() => {
    GetData();
  }, []);

  console.log("Data", Data);

  //   const opts = {
  //     height: "390",
  //     width: "100%",
  //   };

  const showInfoNinos = () => (
    <>
      {Data?.infoNino?.length > 0 ? (
        <div className="flex flex-wrap p-3">
          {Data?.infoNino?.map((item: any) => {
            return (
              <div
                key={item.id}
                className="flex flex-wrap pr-[1.1rem] justify-center"
              >
                <InfoNinosItem
                  key={item.id}
                  title={item.tema}
                  subtitle1="Grado:"
                  contenido={item.grado}
                  subtitle2="Area:"
                  contenido2={item.area}
                  subtitle3="Docente:"
                  contenido3={item.docente}
                  subtitle4="Fecha:"
                  fecha={item.fecha}
                />
                {/* <YouTube
                  className="border-b-2 mb-4 lg:border-none lg:mb-0 pb-6 col-span-2"
                  videoId={`${item.archivo}`}
                  opts={opts}
                /> */}
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
    <div>
      <TitulosInternos title="Información para niños, niñas y adolescentes" />
      {showInfoNinos()}
    </div>
  );
}

export default Index;
