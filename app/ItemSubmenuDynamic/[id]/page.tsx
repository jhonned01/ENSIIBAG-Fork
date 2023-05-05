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
    const GetData = async (id: Number) => {
      try {
        setLoading(true);
        const info = await fetch(`/api/ItemSubmenuDynamic/${id}`).then((res) =>
          res.json()
        );
        setData(info?.ItemSubMenu);
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
