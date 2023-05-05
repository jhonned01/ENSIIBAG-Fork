"use client";
import CompCargando from "@/app/Inicio/CompCargando";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ItemSubmenuDynamic = ({ params: { id } }: any) => {
  const [Data, setData] = useState({} as any);
  const [Loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const GetData = async (id: Number) => {
      try {
        setLoading(true);
        const info = await fetch(`/api/ItemSubmenuDynamic/${id}`).then((res) =>
          res.json()
        );

        console.log(info);

        setData(info?.ItemSubMenu || {});
        setLoading(false);
      } catch (error) {
        console.log(error);

        alert("Error al cargar la información");
        setLoading(false);
        router.replace("/");
      }
    };
    if (id) {
      GetData(id);
    }
  }, [id, router]);

  return (
    <div>
      {!Loading && Object.keys(Data)?.length > 0 ? (
        <>
          <TitulosInternos title={Data?.name || "Ruta Incorrecta"} />

          {Data?.contenido?.length ? (
            <>
              <div
                className="container mx-auto flex flex-col items-center justify-center p-4"
                dangerouslySetInnerHTML={{ __html: `${Data?.contenido || ""}` }}
              />
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-gray-800 text-3xl font-semibold animate-pulse pt-2">
                  Registro pendiente por subir por parte de la institución. .
                </h1>
                <Image
                  src={"/Menu/PendienteWebMaster.png"}
                  width={500}
                  height={500}
                  alt="Pendiente por subir WebMaster"
                />
              </div>
            </>
          )}
        </>
      ) : (
        <> {Loading && <CompCargando />}</>
      )}
    </div>
  );
};

export default ItemSubmenuDynamic;
