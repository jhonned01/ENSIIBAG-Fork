import Image from "next/image";
import React from "react";

function SedesItem({
  imgSede,
  title,
  subtitle,
  contenido,
  title2,
  contenido2,
  correo,
  title3,
  contenido3,
  title4,
  contenido4,
}: any) {
  return (
    <div>
      <section className="pt-6">
        <div className=" mx-auto">
          <div className="grid grid-cols-1">
            <div className=" md:w-4/6 px-12 md:px-4 mr-auto ml-auto">
              <div className="text-center  flex flex-col min-w-0 break-words bg-[#006F46] w-full shadow-lg rounded-lg">
                <div className="w-full h-full">
                  <Image
                    className="rounded-t-lg object-cover"
                    src={imgSede}
                    width={1300}
                    height={480}
                    alt="Imagen Sedes"
                  />
                </div>
                <blockquote className="p-4">
                  <h4 className="text-xl font-bold text-white lg:text-2xl">
                    {title}
                  </h4>
                  <h5 className="text-md font-light mt- text-white lg:text-xl border-[#66A990] border-b-2 pb-3">
                    {/* {subtitle} */}
                  </h5>
                  <p className="mt-2 text-white font-medium">{contenido}</p>
                </blockquote>
              </div>
            </div>
            <div
              className="w-full px-4 m-auto text-center my-[1rem]"
              style={{ textAlign: "-webkit-center" } as any}
            >
              <div className="w-full px-4 pb-4">
                <div className="px-4">
                  <h6 className="text-xl mb-1 font-bold text-[#006F46]">
                    {title3}
                  </h6>
                  <p className="text-lg font-medium text-blueGray-500 max-w-[46rem]">
                    {contenido3}
                  </p>
                  <a
                    href={`mailto: ${correo}`}
                    className="mb-4 text-black font-medium text-lg"
                    target="_blank "
                    rel="noopener"
                  >
                    <p className="hover:underline decoration-solid">
                      Correo: {correo}
                    </p>
                  </a>
                </div>
              </div>
              <div className="w-full px-4">
                <div className="px-4 flex-auto">
                  <h6 className="text-xl mb-1 font-bold text-[#006F46]">
                    {title4}
                  </h6>
                  <p className="text-lg font-medium mb-4 text-blueGray-500 max-w-[46rem]">
                    {contenido4}
                  </p>
                </div>
              </div>
              <div className="w-full px-4">
                <div className="px-4 flex-auto">
                  <h6 className="text-xl mb-1 font-bold text-[#006F46]">
                    {title2}
                  </h6>
                  <p className="text-lg font-medium text-blueGray-500 max-w-[46rem]">
                    {contenido2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SedesItem;
