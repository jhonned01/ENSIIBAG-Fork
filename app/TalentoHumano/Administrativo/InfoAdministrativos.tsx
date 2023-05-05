"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const InfoAdministrativos = ({ info, contratista }: any) => {
  const [correoInst, setCorreoInst]: any = useState([]);

  useEffect(() => {
    const usersCorreo = () => {
      let correo = `${info?.admco_nom1?.toLowerCase()}.${info?.admco_ape1?.toLowerCase()}`;
      let correo2 = `${info?.admco_nom1?.toLowerCase()}.${info?.admco_ape2?.toLowerCase()}`;

      // axios post correo
      axios("/api/directorio/correoAdministrativos", {
        params: {
          correo,
          correo2,
        },
      })
        .then((res) => {
          console.log("res", res);

          setCorreoInst(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // send back end dato  axios
    if (Object.keys(info)?.length > 0) {
      usersCorreo();
    }
  }, [info]);

  return (
    <>
      {Object.keys(info).length ? (
        <div className="max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <div className="text-white shadow-xl rounded-3xl align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-36 h-36 overflow-hidden">
                  <Image
                    width={166}
                    height={166}
                    src={`https://www.ensiibague.edu.co/sygescol${new Date().getFullYear()}/images/fotos/administrativos/${
                      info.imagen != ""
                        ? info.imagen
                        : info.genero == "F"
                        ? "siluetaMujer.jpg"
                        : info.genero == "M"
                        ? "siluetaHombre.jpg"
                        : "no_imagen.jpg"
                    }`}
                    className="object-cover object-top w-full shadow-xl align-middle border-none absolute"
                    alt="Imagen"
                  />
                </div>
              </div>
              <div className="w-full text-center mt-20">
                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                  {correoInst?.correoData?.[0]?.correo_insti ||
                    "NO REGISTRA CORREO INSTITUCIONAL EN EL SISTEMA"}
                </div>
              </div>
            </div>
            <div className="text-center mt-2 uppercase">
              <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                {info.nombre}
              </h3>
              <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
                {info.cargo}
              </div>
            </div>
            {!contratista ? (
              <div className="mt-6 py-6 border-t border-slate-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4">
                    <p className="font-light leading-relaxed text-slate-600 mb-4 uppercase">
                      Pendiente por registrar el horario de atención al usuario
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <p className="text-center my-4 lg:text-lg font-medium animate-pulse text-[#006F46]">
          Por favor seleccione un usuario
        </p>
      )}
    </>
  );
};

export default InfoAdministrativos;
