"use client";
import CompCargando from "@/app/Inicio/CompCargando";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ItemSubmenuDynamic = ({ params: { id } }: any) => {
  const [Data, setData] = useState({} as any);
  const [Loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const GetData = async () => {
      try {
        setLoading(true);
        const infos = await fetch(`/api/ItemSubmenuDynamic/${id}`).then((res) =>
          res.json()
        );
        setData(infos?.ItemSubMenu);
        setLoading(false);
      } catch (error) {
        console.log(error);

        alert("Error al cargar la información");
        setLoading(false);
        router.replace("/");
      }
    };
    if (id) {
      GetData();
    }
  }, [id]);

  return (
    <div>
      {!Loading && Object.keys(Data)?.length > 0 ? (
        <>
          <TitulosInternos title={Data?.name} />
          <div
            className="container mx-auto flex flex-col items-center justify-center p-4"
            dangerouslySetInnerHTML={{ __html: `${Data?.contenido || ""}` }}
          />
        </>
      ) : (
        <> {Loading && <CompCargando />}</>
      )}
    </div>
  );
};

export default ItemSubmenuDynamic;
