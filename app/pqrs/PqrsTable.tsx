import React from "react";
import Moment from "react-moment";
import "moment/locale/es";

const PqrsTable = ({
  id = null,
  nombre = null,
  fecha = null,
  vacio = false,
  estado = null,
  asunto = null,
  updated_at,
  respuesta,
  setRes,
}: any) => {
  // convert date to string
  const dateRadicado = new Date(fecha).toLocaleDateString();
  const dateRespuesta = new Date(updated_at).toLocaleDateString();

  console.log("========respuesta============================");
  console.log(respuesta);
  console.log("====================================");

  return (
    <>
      {vacio ? (
        <tbody className="">
          <tr className="border-2 ">
            <td
              className="
                  text-center text-dark
                  font-medium
                  text-base
                  py-5
                  px-2
                  bg-[#F3F6FF]
                  border-b border-l border-[#E8E8E8]
                  "
              colSpan={4}
            >
              <p>Nombre no encontrado</p>
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody
          className={
            respuesta
              ? "border-2 border-gray-400 bg-green-700  text-white"
              : "border-2 border-gray-400 bg-[#b22727] text-white"
          }
        >
          <tr className="    hover:scale-[99%] ">
            <td
              className={`text-center font-medium text-base py-5 px-2  border-b border-[#E8E8E8] uppercase`}
            >
              {id}
            </td>
            <td
              className="
              text-center font-medium text-base py-5 px-2  border-b border-[#E8E8E8] uppercase
                  "
            >
              {nombre}
            </td>
            <td
              className="
              text-center font-medium text-base py-5 px-2  border-b border-[#E8E8E8] uppercase
                  "
            >
              <span>
                <Moment format="DD">{fecha || "Fecha"}</Moment> de{" "}
                <Moment format="MMMM">{fecha || "Fecha"}</Moment> del{" "}
                <Moment format="YYYY">{fecha || "Fecha"}</Moment>
              </span>
              {/* {dateRadicado || "Fecha"} */}
            </td>

            <td
              className="
              text-center font-medium text-base py-5 px-2  border-b border-[#E8E8E8] uppercase
                  "
            >
              {asunto || "Sin asunto"}
            </td>
            <td
              className="
              text-center font-medium text-base py-5 px-2  border-b border-[#E8E8E8] uppercase
              "
            >
              {estado || "pendiente"}
            </td>
            <td
              className="
              text-center font-medium text-base py-5 px-2  border-b border-[#E8E8E8] uppercase
                  "
            >
              {(updated_at && (
                <span>
                  <Moment format="DD">{updated_at}</Moment> de{" "}
                  <Moment format="MMMM">{updated_at}</Moment> del{" "}
                  <Moment format="YYYY">{updated_at}</Moment>
                </span>
              )) ||
                "No Respuesta"}
            </td>
            <td
              className="
              text-center font-medium text-base py-5 px-2  border-b border-[#E8E8E8] uppercase
                  "
            >
              {(respuesta && (
                <>
                  <button
                    className="text-white font-bold uppercase"
                    onClick={() => setRes(respuesta)}
                  >
                    Ver Respuesta
                  </button>
                </>
              )) || <p className="uppercase "> Sin Respuesta</p>}
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
};

export default PqrsTable;
