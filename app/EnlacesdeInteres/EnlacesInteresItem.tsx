import Image from "next/image";
import React from "react";

function EnlacesInteresItem({ imgEnlacesInt, title, enlace, contenido }: any) {
  return (
    <div className="w-[100%] h-[29rem] rounded-xl bg-[#99C5B5] shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col justify-between w-[20rem] min-h-full p-5">
        <Image
          className="object-contain m-auto"
          src={`https://ensiibague.edu.co/portal/img/${imgEnlacesInt}`}
          width={330}
          height={330}
          alt={imgEnlacesInt}
        />
        <div>
          <h1 className="my-1 text-[#003823] font-bold text-xl text-center">
            {title}
          </h1>
          <p className="mb-4 leading-[1] font-normal text-md text-center">
            {contenido}
          </p>
          <button
            onClick={() => window.open(enlace)}
            className="font-bold w-full rounded-md bg-[#005335] hover:bg-[#003823] py-2 text-white hover:shadow-md duration-75"
          >
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnlacesInteresItem;
