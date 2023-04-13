"use client";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import { useEffect, useState } from "react";
import HorizonteItem from "./HorizonteItem";

function HorizonteInstitucional() {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const Horizonte = await fetch("/api/Horizonte").then((res) => res.json());
    setData(Horizonte);
  };

  useEffect(() => {
    GetData();
  }, []);

  console.log("Data", Data);

  return (
    <>
      <TitulosInternos title="Horizonte Institucional" />

      <div className="my-6 px-4 max-w-md grid grid-cols-1 sm:grid-cols-1 sm:max-w-2xl md:grid-cols-1 md:max-w-[40rem] lg:grid-cols-2 lg:max-w-[100rem] xl:max-w-[90rem] gap-4 items-center justify-center container mx-auto">
        {Data?.Horizonte?.map((horizonte: any, key: any) => (
          <HorizonteItem
            key={key}
            horizonte={horizonte}
            imagesHorizonte={horizonte.imagen}
          />
        ))}
      </div>
    </>
  );
}

export default HorizonteInstitucional;
