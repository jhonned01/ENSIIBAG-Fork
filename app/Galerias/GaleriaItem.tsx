import Image from "next/image";
import React from "react";

function GaleriaItem({ imgGalerias, title }: any) {
  return (
    <>
      <div className="rounded-xl relative group w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden m-auto mt-4 mb-4">
        <div className="w-full h-full transform duration-700 backdrop-opacity-100">
          <Image
            className="object-cover !h-[160px] md:!h-[320px]"
            src={imgGalerias}
            width={320}
            height={320}
            alt={imgGalerias}
          />
        </div>
        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
          <div className="absolute w-full flex place-content-center">
            <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-36 lg:mt-44">
              {title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GaleriaItem;
