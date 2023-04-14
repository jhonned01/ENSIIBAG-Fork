"use client";
import TitulosInternos from "@/app/Inicio/TitulosInternos";
import React, { useEffect, useState } from "react";
import LayoudAdmnistrativos from "./LayoudAdmnistrativos";

const Administrativo = () => {
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const administrativos = await fetch("/api/directorio/administrativos").then(
      (res) => res.json()
    );
    setData(administrativos);
  };

  useEffect(() => {
    GetData();
  }, []);

  const [valueInput, setValue] = useState("");

  const filteredItems = Data?.directivos?.filter((item: any) => {
    let nombre = `${item?.admco_nom1?.toLowerCase()} ${item?.admco_nom2?.toLowerCase()} ${item?.admco_ape1?.toLowerCase()} ${item?.admco_ape2?.toLowerCase()}`;
    let nombre2 = nombre.replace(/\s+/g, " ");
    let Ape1Nombre = `${item.admco_nom2} ${item.admco_ape1} ${item.admco_ape2} ${item.admco_nom1}`;
    let Ape2Nombre = `${item.admco_ape2} ${item.admco_nom1} ${item.admco_nom2} ${item.admco_ape1}`;

    return (
      (nombre2 && nombre2.includes(valueInput.toLowerCase())) ||
      (item.nombre &&
        item.nombre
          .replace(/\s+/g, " ")
          .toLowerCase()
          .includes(valueInput.toLowerCase())) ||
      (Ape2Nombre &&
        Ape2Nombre.replace(/\s+/g, " ")
          .toLowerCase()
          .includes(valueInput.toLowerCase())) ||
      (Ape1Nombre &&
        Ape1Nombre.replace(/\s+/g, " ")
          .toLowerCase()
          .includes(valueInput.toLowerCase()))
    );
  });

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <input
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            // Prevenir
            e.preventDefault();
            return;
          }
        }}
        value={valueInput.toUpperCase()}
        placeholder="Buscar..."
        className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#bc5434] dark:focus:border-blue-500 focus:outline-none focus:ring"
      />
    );
  }, [valueInput]);
  return (
    <div>
      <TitulosInternos title="Administrativos" />
      {/* navegations */}
      <div>
        <form>
          <div className="pl-[2%] grid grid-cols-1 gap-6 my-4 sm:grid-cols-4">
            <label className=" text-lg capitalize font-bold flex justify-center items-center text-gray-800">
              Ingrese el nombre del Administrativo:
            </label>
            <div className=" flex justify-center items-center">
              {subHeaderComponentMemo}
            </div>
          </div>
        </form>
      </div>
      {/* table */}
      <LayoudAdmnistrativos users={filteredItems} />
    </div>
  );
};

export default Administrativo;
