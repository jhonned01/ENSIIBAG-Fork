"use client";
import React, { useEffect, useState } from "react";
import AlertasItem from "./Alertas/AlertasItem";
import SubMenu from "./Inicio/SubMenu";
import Slider from "./Inicio/Slider";

const BodyComponent = () => {
  const [open, setOpen] = useState(true);
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const Alertas = await fetch("/api/alerta").then((res) => res.json());
    const Slider = await fetch("/api/slider").then((res) => res.json());

    setData({ Alertas: Alertas.alerta || [], Slider: Slider.slider || [] });
  };

  useEffect(() => {
    try {
      GetData();
    } catch (error) {
      console.log(error);

      alert("Error al cargar los datos");
    }
  }, []);

  return (
    <>
      {Data?.Alertas?.length && (
        <AlertasItem setOpen={setOpen} open={open} alerta={Data.Alertas} />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-10">
        {/* left */}
        <div className=" flex p-2 lg:grid gap-2 lg:col-span-2 bg-white ">
          <SubMenu
            title="Talento Humano"
            img="/Directorio/iconos/iconoTalentoHumano.png"
            link={"/TalentoHumano"}
          />
          <SubMenu
            title="PROCESOS DE PREMATRÍCULAS Y MATRÍCULAS"
            img="/Directorio/iconos/iconosMatriculas.png"
            link={"/ProcesosMatriculas"}
          />
          <SubMenu
            title="Trámites y Servicios"
            img="/Directorio/iconos/iconoTramites.png"
            link={"/Tramites"}
          />
        </div>

        <div className="lg:col-span-6 overflow-hidden">
          {/* Center carousel */}

          {Object.keys(Data) && Data?.Slider?.length ? (
            <Slider imageSlider={Data.Slider} />
          ) : (
            <p className="text-red-900">
              {" "}
              Imágenes del Slider pendientes por publicar desde WebMaster
            </p>
          )}
        </div>

        {/* right */}
        <div className="grid lg:col-span-2">
          <div className="flex p-2 lg:grid gap-2 lg:col-span-2 bg-white">
            <SubMenu
              title="Programa de Formación Complementaria (P.F.C.)"
              description="Login Sygescol"
              external={true}
              link="https://www.ensiibague.edu.co/login_varios_usuarios.php"
              img="/Directorio/iconos/iconoPFC.png"
            />
            <SubMenu
              title={`Procesos de Gobierno Escolar ${new Date().getFullYear()}`}
              external={true}
              link=""
              // click={() => router.push("/TrazabilidadControl")}
              img="/Directorio/iconos/iconoGobiernoEscolar.png"
            />
            <SubMenu
              title="Verificador de Autenticidad de Documentos"
              external={true}
              link={`https://www.ensiibague.edu.co/sygescol${new Date().getFullYear()}/verificacion_certificado.php`}
              img="/Directorio/iconos/iconosVerificadorDoc.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
