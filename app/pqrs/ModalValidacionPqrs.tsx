"use client";
import React, { useState } from "react";
import PqrsTable from "./PqrsTable";

const ModalValidacionPqrs = ({ open, onCloseModal, data }: any) => {
  console.log("====================================validate");
  console.log(data);
  console.log("====================================validate");
  const [res, setRes] = useState();

  const showDataInfo = () => {
    if (data?.validation?.length > 0) {
      return data?.validation?.map((item: any, index: any) => (
        <PqrsTable
          key={index}
          id={item.id}
          nombre={item.nombre}
          fecha={item.created_at}
          estado={item.estado}
          asunto={item.asunto}
          updated_at={item.updated_at}
          respuesta={item.respuesta}
          setRes={setRes}
        />
      ));
    }
  };

  return (
    <div>
      {/* <button id="openBtn">Open Modal</button> */}
      <div
        className={`${
          open ? "bg-black/70  z-[100] fixed w-full h-full inset-0" : "hidden"
        }`}
      >
        <div className="modal-content m-auto max-h-[500px] bg-gray-100 w-4/5 shadow-lg overflow-auto sticky top-[38%]">
          <div className="p-4 bg-[#005335] text-white text-[1.6rem] font-bold">
            <span
              onClick={onCloseModal}
              className="text-[3rem] closeBtn float-right text-lg font-bold text-white/80 hover:text-white no-underline cursor-pointer"
            >
              ×
            </span>
            <h2>Solicitudes</h2>
          </div>
          <div className="p-4">
            {/* boddy */}

            <section className=" bg-white pt-2 roun">
              <div className="mx-auto container ">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4">
                    <div className="max-h-80 overflow-y-auto">
                      <table className="table-auto w-full ">
                        <thead className=" bg-[#006F46]">
                          <tr className="bg-primary text-center ">
                            <th className="uppercase text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent ">
                              Código
                            </th>
                            <th className="text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 uppercase">
                              Usuario
                            </th>
                            <th className=" text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 uppercase">
                              Fecha Radicado
                            </th>
                            <th className="uppercase text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent">
                              Tipo de Solicitud
                            </th>
                            <th className="uppercase text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent ">
                              Estado del trámite
                            </th>{" "}
                            <th className="uppercase text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent">
                              Fecha de respuesta
                            </th>
                            <th className="uppercase text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent">
                              respuesta
                            </th>
                          </tr>
                        </thead>
                        {/* campos */}
                        {showDataInfo()}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="p-4 text-white font-bold max-h-36 sm:max-h-28 text-[1.2rem] bg-green-700 overflow-auto">
            {/* <h3>Modal Footer</h3> */}
            {res && <p className="">Respuesta: {res}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalValidacionPqrs;
