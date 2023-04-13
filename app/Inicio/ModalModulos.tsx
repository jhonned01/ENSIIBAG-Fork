import Link from "next/link";
import React from "react";

const ModalModulos = ({ title, moduloIteam, setModal, modal, links }: any) => {
  //  quitar espacios del titulo

  return (
    <>
      <div
        onClick={() => setModal(false)}
        className={`${
          !modal && "hidden"
        } fixed p-4 z-50 inset-0 bg-gray-900 bg-opacity-50 h-full w-full sm:px-4`}
      >
        <div className="sticky top-[16%] sm:top-[20%] mx-auto shadow-lg rounded-md bg-white w-full sm:w-auto lg:h-auto max-w-[80rem] sm:max-h-[450px] lg:max-h-[600px]">
          {/* Modal header */}
          <div className="flex flex-row items-center px-4 justify-between bg-[#006F46] sm:bg-gradient-to-br text-white text-xl rounded-t-md py-2">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px]">
              {title}
            </h1>
            <button
              className="text-[2rem] leading-none"
              onClick={() => setModal(false)}
            >
              x
            </button>
          </div>
          {/* Modal body */}
          <div className="h-[30rem] overflow-scroll mb-2">
            <ul className="flex flex-col p-4">
              <li className=" grid gap-3 grid-cols-1 md:grid-cols-2">
                {moduloIteam?.map((iteam: any, key: any) => (
                  <Link
                    href={""}
                    key={key}
                    className="cursor-pointer select-none h-20 flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 hover:shadow-2xl border-[#006F46]"
                  >
                    <div className="flex-1 pl-1 mr-16">
                      <div className="text-sm lg:text-lg sm:font-medium">
                        {iteam.submenu}
                      </div>
                    </div>
                    <div className="w-10 text-wrap text-center flex text-white text-bold flex-col rounded-full bg-[#006F46] justify-center items-center mr-10 p-2">
                      {key + 1}
                    </div>
                  </Link>
                ))}
              </li>
            </ul>
          </div>
          <div className="px-4 py-2 border-t border-t-[#006F46] flex justify-end items-center">
            <button
              className="bg-[#006F46] text-white px-4 py-2 rounded-md hover:bg-[#005335] transition"
              onClick={() => setModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalModulos;
