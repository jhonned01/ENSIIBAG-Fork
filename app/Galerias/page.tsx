"use client";
import Image from "next/image";
import TitulosInternos from "../Inicio/TitulosInternos";
import GaleriaItem from "./GaleriaItem";
import { useEffect, useState } from "react";

function Index() {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const galeria = await fetch("/api/galeria").then((res) => res.json());
    setData(galeria);
  };

  useEffect(() => {
    GetData();
  }, []);

  const ShowData = () => {
    // if (Data?.galeria[0]?.msn || Data?.galeria[1]?.error) {
    //   return (
    //     <div>
    //       <p className="error text-center">{galeria[0]?.msn}</p>
    //       <p className="error text-center">{galeria[1]?.error}</p>
    //     </div>
    //   );
    // }

    if (Data?.galeria && Data?.galeria.length >= 1) {
      return Data?.galeria.map((item: any) => (
        <GaleriaItem
          key={item.id}
          title={item.descripcion}
          imgGalerias={`https://ensiibague.edu.co/portal/img/${item.imagen}`}
        />
      ));
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
      <TitulosInternos title="Galerías" />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {ShowData()}
      </div>
    </div>
  );
}

export default Index;
