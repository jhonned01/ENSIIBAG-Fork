"use client";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import BusquedaAños from "./BusquedaAños";
import Image from "next/image";
import { useEffect, useState } from "react";

const Items = ({ response: data }: any) => {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const ItemId = await fetch("/api/ItemId").then((res) => res.json());
    setData(ItemId);
  };

  useEffect(() => {
    GetData();
  }, []);

  const showData = () => {
    if (Data?.data?.length > 0) {
      return <BusquedaAños response={Data?.data} id={"router?.query?.id[0]"} />;
    } else {
      return (
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
      );
    }
  };
  return (
    <div>
      <TitulosInternos title={"router?.query?.id[1]"} />
      {showData()}
    </div>
  );
};

export default Items;
