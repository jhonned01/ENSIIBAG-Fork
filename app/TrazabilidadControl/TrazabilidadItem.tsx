import React from "react";

function TrazabilidadItem({ imgEnlacesInt, title, enlace }: any) {
  return (
    <>
      <div className="grid mx-auto px-5 pt-2 pb-4">
        <div className="w-72 overflow-hidden rounded-xl bg-[#99C5B5] shadow-md duration-200 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-col justify-between min-h-full align- p-5 lg:">
            <img
              className="mt-2 mx-auto mb-[3%] max-w-[14rem]"
              src={imgEnlacesInt}
            />
            <div>
              <p className="mb-4 text-[#003823] font-bold text-center">
                {title}
              </p>

              <a href={enlace} target="_blank ">
                <button className="font-bold w-full rounded-md bg-[#005335] hover:bg-[#003823] py-2 text-white hover:shadow-md duration-75">
                  Ver Más
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrazabilidadItem;
