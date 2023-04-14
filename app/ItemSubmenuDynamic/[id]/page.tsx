"use client";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import React, { useEffect, useState } from "react";

const ItemSubmenuDynamic = ({ params: { id } }: any) => {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const infos = await fetch(`/api/ItemSubmenuDynamic/${id}`).then((res) =>
      res.json()
    );
    setData(infos?.ItemSubMenu);
  };

  console.log("data", Data);

  useEffect(() => {
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
            className="container mx-auto"
            dangerouslySetInnerHTML={{ __html: `${Data?.contenido || ""}` }}
          />
        </>
      )}
    </div>
  );
};

export default ItemSubmenuDynamic;
