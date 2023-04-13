import React from "react";

function PreguntasFrecuentesNew({ icono, title, icono2, contenido }: any) {
  return (
    <>
      <div className="cursor-pointer relative flex justify-center items-center h-full rounded-3xl border-4 border-[#003823] bg-[#99C5B5] p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#003823]">
        <div className="group-hover:absolute group-hover:opacity-0">
          {icono}
          <p className="text-[#003823] mt-4 text-xl font-bold sm:text-2xl">
            ¿{title}?
          </p>
        </div>
        <div className="absolute opacity-0 group-hover:relative group-hover:opacity-100">
          {icono2}
          <p className="mt-4 text-lg font-medium leading-relaxed">
            {contenido}
          </p>
        </div>
      </div>
    </>
  );
}

export default PreguntasFrecuentesNew;
