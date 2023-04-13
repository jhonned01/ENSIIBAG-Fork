"use client";
import Image from "next/image";
import { RiQuestionnaireFill, RiQuestionAnswerFill } from "react-icons/ri";
import TitulosInternos from "../Inicio/TitulosInternos";
import PreguntasFrecuentesNew from "./PreguntasFrecuentesNew";
import { useEffect, useState } from "react";

function Index() {
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
      <TitulosInternos title="Preguntas y Respuestas Frecuentes" />
      {Data?.PreguntasRespuestas?.preguntas?.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-4 p-4 text-center mx-auto my-6 w-full lg:max-w-5xl drop-shadow rounded-md">
          {Data?.PreguntasRespuestas?.preguntas?.map((item: any) => {
            return (
              <>
                <div className="w-full block mx-auto mb-[1.6rem]">
                  <div className="group">
                    <PreguntasFrecuentesNew
                      icono={
                        <RiQuestionnaireFill className="text-[#003823] w-[100%] h-[5rem]" />
                      }
                      title={item.titulo}
                      icono2={
                        <RiQuestionAnswerFill className="text-[#003823] w-[100%] h-[5rem]" />
                      }
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
}

export default Index;
