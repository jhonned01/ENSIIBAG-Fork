"use client";
import React, { useEffect, useState } from "react";
import TitulosInternos from "../Inicio/TitulosInternos";
import Link from "next/link";

const Contacto = () => {
  const [InfoSedes, setInfoSedes] = useState([]);

  async function ObtenerData() {
    const sedes = await fetch(`/api/Footer`).then((response) =>
      response.json()
    );

    setInfoSedes(sedes.nuestrasSedes);
  }
  useEffect(() => {
    ObtenerData();
  }, []);

  return (
    <>
      <TitulosInternos title="Nuestras Sedes" />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  container mx-auto justify-center items-center ">
        {InfoSedes?.map((item: any, key: any) => (
          <div key={key}>
            <div className="bg-white rounded-lg  mb-10">
              <img
                src={`https://ensiibague.edu.co/portal/img/${item?.imagen}`}
                alt={`${item?.imagen}`}
                className="object-cover rounded-xl"
              />

              <div className="p-6 text-center">
                <h3>
                  <a
                    // href="javascript:void(0)"
                    className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] block hover:text-primary "
                  >
                    {item?.nombre}
                  </a>
                </h3>
                <div className="text-base text-body-color leading-relaxed mb-7">
                  <p>
                    <a href={`mailto:${item?.correo}`}>{item?.correo}</a>
                  </p>
                  <p>
                    {item.telefonos && (
                      <a href={`tel:${item?.telefonos?.trim()}`}>
                        Telefono: {item.telefonos}
                      </a>
                    )}
                  </p>
                </div>
                <Link
                  href={`/Sedes/${item?.id}`}
                  className="inline-block py-2 px-7 border border-[#006f46] text-[#006f46] hover:bg-[#006f46] hover:text-white rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary transition"
                >
                  Mas Información
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contacto;
