"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ModalPqrsSend from "./ModalPqrsSend";
import ModalValidacionPqrs from "./ModalValidacionPqrs";
import TitulosInternos from "../Inicio/TitulosInternos";
import SVGpqrs from "./SVGpqrs";

function PQRS() {
  const [value, setValue] = useState({
    Nombres: "",
    Documento: "",
    Telefono: "",
    Correo: "",
    Asunto: "",
    Mensaje: "",
    DocumentoValidation: "",
    PQRS: "",
  });

  const [data, setData] = useState([]);
  const [dataValidation, setDataValidation] = useState([]);

  const [open, setOpen] = useState(false);
  const [openValidate, setOpenValidate] = useState(false);

  const [Click, setClick] = useState(false);
  const [ClickValidate, setClickValidate] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const onOpenModalValidate = () => setOpenValidate(true);
  const onCloseModalValidate = () => setOpenValidate(false);

  const handleInputChange = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSendFormSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      Nombres: value.Nombres,
      Documento: value.Documento,
      Telefono: value.Telefono,
      Correo: value.Correo,
      Asunto: value.Asunto,
      Mensaje: value.Mensaje,
    };
    await axios
      .post("/api/pqrs", data)
      .then((res) => {
        setData(res.data);

        setClick(true);
        onOpenModal();
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  const handlerClickVidation = async (e: any) => {
    e.preventDefault();

    await axios
      .post("/api/pqrs/validacion", {
        DocumentoValidation: value.DocumentoValidation,
        PQRS: value.PQRS,
      })
      .then((res) => {
        setDataValidation(res.data);
        if (res?.data?.validation?.length == 0) {
          Swal.fire({
            // title: "Sweet!",
            text: "El documento no existe en la base de datos",
            imageUrl: "/Menu/LogoSYGESCOL2022.png",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "SYGESCOL ONLINE",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#151a8b",
          });
          // alert("El documento no existe en la base de datos");
        } else {
          setClickValidate(true);
          onOpenModalValidate();
          setData(res?.data?.validation);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlerOpenModal = (
    data: any,
    open: any,
    setOpen: any,
    onOpenModal: any,
    onCloseModal: any
  ) => {
    return (
      <ModalPqrsSend
        data={data}
        open={open}
        setOpen={setOpen}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />
    );
  };

  const handlerOpenModalValidate = (
    data: any,
    open: any,
    setOpen: any,
    onOpenModal: any,
    onCloseModal: any
  ) => {
    return (
      <ModalValidacionPqrs
        data={data}
        open={open}
        setOpen={setOpen}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />
    );
  };

  return (
    <div>
      {Click &&
        handlerOpenModal(data, open, setOpen, onOpenModal, onCloseModal)}
      {ClickValidate &&
        handlerOpenModalValidate(
          dataValidation,
          openValidate,
          setOpenValidate,
          onOpenModalValidate,
          onCloseModalValidate
        )}
      <TitulosInternos title="PQRS" />

      <div className="grid grid-cols-1 md:grid-cols-1 justify-center px-6 my-12 lg:grid-cols-2 lg:px-28">
        {/* Row */}

        <div className="mb-4">
          <div className="rounded-xl mx-auto w-full md:w-4/5 lg:w-full bg-[#006F46] p-5">
            <div className="px-8 mb-4 text-center">
              <h3 className="text-white mb-2 text-4xl font-bold">PQRS</h3>
            </div>
            <form
              onSubmit={handlerSendFormSubmit}
              className="px-8 pt-6 pb-8 mb-4 rounded"
            >
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white">
                  Nombres:
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                  autoFocus
                  name="Nombres"
                  type="text"
                  placeholder="Ingresa Nombres Completos"
                  // validar input name
                  required
                  // autoComplete="off"
                  // validar input nombre
                  minLength={15}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white">
                  Documento:
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                  name="Documento"
                  type="number"
                  placeholder="Ingresa Documento"
                  required
                  // autoComplete="off"
                  // validar input solo numeros
                  // validar minimo 8 numeros
                  minLength={8}
                  min="0"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white">
                  Teléfonos:
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                  name="Telefono"
                  type="number"
                  placeholder="Ingresa Número de Teléfono"
                  // autoComplete="off"
                  required
                  pattern="[0-9]*"
                  min="0"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white">
                  Correo:
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                  name="Correo"
                  type="email"
                  placeholder="Ingresa Email"
                  required
                  // validar input correo
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white">
                  Asunto:
                </label>
                <select
                  onChange={handleInputChange}
                  name="Asunto"
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="1">Seleccione</option>
                  <option value="solicitudes">Solicitudes</option>
                  <option value="peticiones">Peticiones</option>
                  <option value="quejas">Quejas</option>
                  <option value="reclamos">Reclamos</option>
                  <option value="sugerencias">Sugerencias </option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white">
                  Mensaje:
                </label>
                <textarea
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                  name="Mensaje"
                  //   type="textarea"
                  placeholder="Ingresa Mensaje"
                  required
                  autoComplete="off"
                  // validar que el text area minimo tenga 10 caracteres
                />
              </div>
              <div className="mb-6 text-center">
                <input
                  className="w-full px-4 py-2 font-bold text-white bg-[#005335] rounded-full hover:bg-[#003823] focus:outline-none focus:shadow-outline cursor-pointer"
                  type="submit"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>

        {/* cuadro#2 */}
        <div className="w-full border-l-2 border-white">
          <div className="rounded-xl mx-auto w-full md:w-4/5 lg:h-[98%] lg:w-full bg-[#006F46] p-5">
            <div className="mb-4 text-center">
              <h3 className="text-white mb-2 text-2xl font-bold">
                ¿Tienes una solicitud en espera?
              </h3>
              <p className="mb-4 text-base text-white lg:text-lg">
                Mira el estado de tu solicitud con tu Número de Identificación o
                Código Único Numérico asignado.
              </p>
            </div>
            <form
              onSubmit={handlerClickVidation}
              className="mx-auto px-8 pt-6 mb-4 rounded "
            >
              <div className="">
                <h1 className="mb-1 text-white text-lg text-center font-semibold">
                  Número de Identificación
                </h1>
                <div className="mb-4 w-full transform border-b-2 bg-[#99C5B5] text-lg duration-300 focus-within:border-[#006F46]">
                  <input
                    type="number"
                    name="DocumentoValidation"
                    onChange={handleInputChange}
                    placeholder="Ingresa Número de Identificación"
                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                    pattern="[0-9]*"
                    min="0"
                  />
                </div>

                <div className="mb-6 text-center">
                  <input
                    className="cursor-pointer mb-3 w-full px-4 py-2 font-bold text-white bg-[#005335] rounded-full hover:bg-[#003823] focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Validar"
                  />
                  <div className="flex justify-around w-full h-[27.4rem]">
                    <span className="w-[380px] h-[380px]">
                      <SVGpqrs />
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PQRS;
