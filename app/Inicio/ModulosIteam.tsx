"use client";
import React, { useState } from "react";
import Image from "next/image";
import ModalModulos from "./ModalModulos";

const ModulosIteam = ({ img, title, moduloIteam }: any) => {
  const [modal, setModal] = useState(false);
  const [Click, setClick] = useState(false);

  const handleModal = (modal: any, setModal: any, moduloIteam: any) => {
    return (
      <ModalModulos
        setModal={setModal}
        modal={modal}
        title={title}
        moduloIteam={moduloIteam}
      />
    );
  };

  return (
    //   background
    <>
      {Click && handleModal(modal, setModal, moduloIteam)}

      {/* card */}
      <div
        onClick={() => {
          setClick(true);
          setModal(true);
        }}
        style={{ filter: "drop-shadow(0px 0px 3px #338C6B)" }}
        className="flex flex-col justify-between w-[16rem] h-[19rem] md:w-[21rem] md:h-[24rem] cursor-pointer rounded-2xl bg-white p-10 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:bg-blue-100"
      >
        <div>
          {img && (
            <Image
              className="w-full h-full object-cover rounded-2xl"
              src={img}
              height={200}
              width={200}
              alt={img}
            />
          )}
        </div>
        {/* text information */}
        <div className="text-center pt-2">
          <h1 className="leading-[1] text-[1rem] uppercase font-semibold text-center text-gray-800 lg:text-[1.3rem] ">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default ModulosIteam;
