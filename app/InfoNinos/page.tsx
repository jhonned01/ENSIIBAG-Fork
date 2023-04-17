"use client";
import Image from "next/image";
import TitulosInternos from "../Inicio/TitulosInternos";
import InfoNinosItem from "./InfoNinosItem";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

function InfoNinos() {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const infoNino = await fetch("/api/infoNino").then((res) => res.json());
    setData(infoNino);
  };

  useEffect(() => {
    GetData();
  }, []);

  // console.log("Data", Data);

  return (
    <div>
      <TitulosInternos title="Información para niños, niñas y adolescentes" />
      {Object.keys(Data).length > 0 && (
        <>
          {Data?.infoNino?.length > 0 ? (
            <div className="flex justify-center flex-wrap p-3">
              {Data?.infoNino?.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 flex-wrap pr-[1.1rem] items-center justify-center"
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
                    <ReactPlayer
                      className="border-2 border-dashed border-[#006f46] rounded-2xl overflow-hidden"
                      url={`${item.archivo}`}
                      width="300px"
                      height={"200px"}
                      controls={true}
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
      )}
    </div>
  );
}

export default InfoNinos;
