"use client";
import Image from "next/image";
import React from "react";

const ProtoMatriculaItem = ({
  imgMatriculas,
  title,
  external,
  contenido,
  link,
  click,
}: any) => {
  function handleEnlaces() {
    if (external) {
      return (
        <>
          <div className="mx-auto max-w-[26rem] rounded-xl shadow-cla-blue bg-[#99C5B5] overflow-hidden">
            <a href={link} rel="noopener noreferrer" className="cursor-pointer">
              <Image
                className="mb-1 w-full object-contain object-center scale-110 transition-all duration-400 hover:scale-100"
                src={imgMatriculas}
                alt="imagen"
                width={400}
                height={400}
              />
            </a>
            <div className="p-6">
              <h1 className="text-lg font-bold text-[#003823] max-w-[20rem]">
                {title}
              </h1>
              <p className="mb-3 leading-4 max-w-[20.5rem]">{contenido}</p>
              <div className="flex items-center flex-wrap ">
                <a
                  href={link}
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <button className="text-white bg-[#005335] hover:bg-[#003823] hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                    Ver más
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="mx-auto max-w-[26rem] rounded-xl shadow-cla-blue bg-[#99C5B5] overflow-hidden">
            <img
              onClick={() => click()}
              className="max-h-[20rem] mb-1 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
              src={imgMatriculas}
            />
            <div className="p-6">
              <h1 className="text-lg font-bold text-[#003823] max-w-[30rem]">
                {title}
              </h1>
              <p className="mb-3 leading-4 max-w-[20.5rem]">{contenido}</p>
              <div className="flex items-center flex-wrap ">
                <a
                  onClick={() => click()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <button className="text-white bg-[#005335] hover:bg-[#003823] hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                    Ver más
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return <>{handleEnlaces()}</>;
};
export default ProtoMatriculaItem;
