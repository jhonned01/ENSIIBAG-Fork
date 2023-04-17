"use client";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import BusquedaAños from "./BusquedaAños";
import Image from "next/image";
import { useEffect, useState } from "react";

const Items = ({ params }: any) => {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const id = params?.id[0];
    const title = params?.id[0];

    const idItem = await fetch(`/api/ItemId?id=${id}&years=Todos&idItem=""`);
    // id,
    // years: "Todos",
    const newData = await idItem.json();
    console.log("newData", newData);

    setData(idItem);
  };

  useEffect(() => {
    GetData();
  }, []);
  console.log("DAta", Data);

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
