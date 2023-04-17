"use client";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import BusquedaAños from "./BusquedaAños";
import Image from "next/image";
import { useEffect, useState } from "react";

const Items = ({ params }: any) => {
  const [Data, setData] = useState({} as any);
  const id = params?.id[0];
  const title = `${params?.id[1]}`;

  useEffect(() => {
    const GetData = async () => {
      const NewData = await fetch(`/api/ItemId?idItem='${id}'`).then((res) =>
        res.json()
      );

      setData(NewData || {});
    };
    if (id) {
      GetData();
    }
  }, [id]);
  // console.log("DAta", Data);

  return (
    <div>
      <TitulosInternos title={decodeURIComponent(title)} />

      {Object.keys(Data)?.length > 0 ? (
        <>
          {Data?.YearsIteam?.length > 0 ? (
            <BusquedaAños response={Data?.YearsIteam} id={id} />
          ) : (
            <>
              {Data?.YearsIteam?.length == 0 && (
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
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-8 h-8 border-4 border-[#006f46] rounded-full animate-spin"
          />
          <p className="ml-2">Cargando...</p>
        </div>
      )}
      {/* {showData()} */}
    </div>
  );
};

export default Items;
