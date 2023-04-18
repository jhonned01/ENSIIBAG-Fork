"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AlertasItem from "../Alertas/AlertasItem";

const BodyComponent = () => {
  const [open, setOpen] = useState(true);

  const [Data, setData] = useState({} as any);

  const getData = async () => {
    try {
      console.log("hay señor ------------------>");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const showAlert = () => {
    if (Data?.alerta?.length >= 1) {
      return (
        <>
          <AlertasItem setOpen={setOpen} open={open} alerta={Data.alerta} />
        </>
      );
    }
  };

  const ShowData = () => {
    if (Data.slider && Data.slider.length >= 1) {
      return (
        <div className="mx-auto ">
          {/* <SafaBody imageSlider={Data.slider} /> */}
        </div>
      );
    } else {
      return (
        <div className="container lg:w-[700px] flex flex-col p-4 mx-auto col-span-3">
          <Image
            src="/Menu/PendienteWebMaster.png"
            width={1400}
            height={940}
            alt="PendienteWebMaster"
            className="object-cover"
          />
          <p className="error text-center mx-auto">
            Imágenes del Slider pendientes por publicar desde WebMaster
          </p>
        </div>
      );
    }
  };

  return (
    <div className="">
      {/* {showAlert()}
      {ShowData()} */}
      hola
    </div>
  );
};

export default BodyComponent;
