"use client";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import React, { useEffect, useState } from "react";

const ItemSubmenuDynamic = ({ params: { id } }: any) => {
  const [Data, setData] = useState({} as any);

  useEffect(() => {
    const GetData = async () => {
      const infos = await fetch(`/api/ItemSubmenuDynamic/${id}`).then((res) =>
        res.json()
      );
      setData(infos?.ItemSubMenu);
    };
    if (id) {
      GetData();
    }
  }, [id]);

  return (
    <div>
      {Object.keys(Data)?.length > 0 && (
        <>
          <TitulosInternos title={Data?.name} />
          <div
            className="container flex flex-col items-center p-4"
            dangerouslySetInnerHTML={{ __html: `${Data?.contenido || ""}` }}
          />
        </>
      )}
    </div>
  );
};

export default ItemSubmenuDynamic;
