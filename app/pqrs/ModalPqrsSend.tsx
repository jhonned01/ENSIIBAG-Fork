import React from "react";

const ModalPqrsSend = ({
  open,
  setOpen,
  onOpenModal,
  onCloseModal,
  data,
}: any) => {
  console.log(data);
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`${
          open
            ? "bg-black/70 z-[100] fixed w-full h-full inset-0 px-8"
            : "hidden"
        }`}
      >
        <div className="bg-white rounded-lg lg:max-w-3xl modal-content m-auto max-h-[500px] shadow-lg overflow-auto sticky top-[38%]">
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-3 rounded-t-lg w-full p-4 bg-[#005335]">
              <div className="text-white font-semibold text-xl lg:text-2xl">
                Solicitud Enviada Con Exito{" "}
              </div>
              <svg
                onClick={onCloseModal}
                className="ml-auto fill-current text-white w-6 h-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </div>
            <div className="mx-auto text-center px-2">
              <div className="text-xl capitalize">
                Hola, <b>{data?.nombre}</b> hemos recibido tu solicitud con
                exito!
              </div>

              <p className="text-lg px-4">
                Recuerda que puedes consultar el estado de tu solicitud con tu
                numero de documento.
              </p>
              <p className="text-xl ">
                Documento:<b>{data?.documento}</b>
              </p>
            </div>
            <div className="ml-auto p-2">
              <button
                onClick={onCloseModal}
                className="bg-transparent hover:bg-[#005335] text-[#005335] font-semibold hover:text-white py-2 px-4 border border-[#005335] hover:border-transparent rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPqrsSend;
