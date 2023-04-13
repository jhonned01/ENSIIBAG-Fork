import React from "react";
import Image from "next/image";

function OfertaEmpleoItem({
  contenido,
  cargo,
  archivo,
  contacto,
  estado,
}: any) {
  // console.log(cargo);
  return (
    <div className="mx-auto w-[86%] bg-white rounded-lg border border-gray-200 shadow-md">
      <Image
        className="!p-[1rem] rounded-lg object-contain"
        src="/Ofertas/OfertasEmpleo.jpg"
        width={640}
        height={480}
        alt="OfertasEmpleo"
      />
      <div style={{ padding: "0.25rem 1.25rem 1.85rem 1.25rem" }}>
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          Cargo o Vacante: <span className="font-medium">{cargo}</span>
        </h5>
        <h5 className="capitalize text-xl font-bold tracking-tight text-gray-900">
          Estado: <span className="font-medium">{estado}</span>
        </h5>

        <div className="text-xl font-bold tracking-tight text-gray-900 mb-1">
          Contacto:{" "}
          <a
            className="text-[#006F46]/90 hover:text-[#006F46]"
            href={`tel:${contacto}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacto}
          </a>
        </div>

        <p className="mb-3 text-base font-normal text-gray-700">{contenido}</p>
        <a
          className="p-2 border-2 border-[#006F46] rounded-lg font-medium text-[#006F46] hover:bg-[#006F46] hover:text-white"
          href={`https://ensiibague.edu.co/portal/pdf/${archivo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Archivo
        </a>
      </div>
    </div>
  );
}

export default OfertaEmpleoItem;
