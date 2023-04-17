"use client";
import axios from "axios";
import { useState } from "react";

const BusquedaAños = ({ response, id }: any) => {
  const [Years, setYears]: any = useState("");
  const [cargando, setCargando] = useState(false);
  const [data, setData]: any = useState([]);

  console.log("data", data);
  console.log("Years", Years);

  const handleChange = async (e: any) => {
    e.preventDefault();
    try {
      setCargando(true);
      const response = await axios.post("/api/ItemId", {
        id: id,
        years: Years || "Todos",
      });

      setData(response?.data?.pdfYears || []);
      setCargando(false);
    } catch (err) {
      setCargando(false);

      setData([
        {
          msn: "Error al cargar los datos por favor recargue la pagina si el error continua contacte con soporte",
        },
      ]);
    }
  };

  return (
    <div>
      <div className="pl-4 pr-4 mb-4 mx-auto rounded-2xl mt-9 bg-[#99C5B5] w-80 h-auto sm:w-7/12  lg:w-8/12">
        <div className="rounded-xl container pt-5 flex justify-center">
          <div className="mb-3 sm:w-full">
            <h1 className="text-2xl font-bold text-[#003823] lg:text-4xl">
              Búsqueda por Años
            </h1>
            <h3 className="text-base mb-2 lg:text-xl text-[#003823]">
              Seleccione un año para obtener más información
            </h3>
            <select
              onChange={(e) => setYears(e.target.value)}
              className="text-white form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-[#005335] bg-clip-padding border-none bg-no-repeat border rounded-md transition duration-300 ease-in-out m-0  focus:outline-none"
            >
              {/* <option selected></option> */}
              <option>Todos</option>
              {response.map((item: any, key: any) => (
                <option key={key} value={item.year}>
                  {item.year}
                </option>
              ))}
            </select>
            <br />
            {!cargando ? (
              <button
                onClick={handleChange}
                className="mb-3 border-2 border-[#005335] hover:bg-[#005335] text-[#005335] hover:text-white w-full py-2 rounded-md text-1xl font-medium transition duration-300"
              >
                BUSCAR
              </button>
            ) : (
              <button
                type="button"
                className="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white"
                disabled
              >
                <svg
                  className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="font-medium subpixel-antialiased">
                  Cargando...
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
      {data?.length > 0 && (
        <div className="container flex flex-wrap flex-row justify-center mx-auto mb-3 gap-4">
          {data?.map((item: any, key: any) => (
            <div key={key} className="pb-4 w-[16rem] h-auto">
              <p className="text-center font-bold pb-1">{item.pdf_nom}</p>
              <a
                className="mb-3"
                key={item.id}
                href={`https://ensiibague.edu.co/portal/pdf/${item.archivo}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[3.6rem] text-[#005335] hover:text-[#003823]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="m-auto stroke-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M3,12 L3.24999995,12 L4.49999995,12 C6.5,12 6.75,13.25 6.75,14 C6.75,14.75 6.5,16 4.49999995,16 L3.24999995,16 L3.24999995,18 L3,17.9999999 L3,12 Z M9.5,18 L9.5,12 C9.5,12 10.4473684,12 11.2052633,12 C12.3421053,12 13.5,12.5 13.5,15 C13.5,17.5 12.3421053,18 11.2052633,18 C10.4473684,18 9.5,18 9.5,18 Z M16.5,19 L16.5,12 L20.5,12 M16.5,15.5 L19.5,15.5"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BusquedaAños;
