"use client";
import React, { useEffect, useState } from "react";
import AlertasItem from "./Alertas/AlertasItem";
import SubMenu from "./Inicio/SubMenu";
import Slider from "./Inicio/Slider";
import CompCargando from "./Inicio/CompCargando";

const BodyComponent = () => {
  const [open, setOpen] = useState(true);
  const [Data, setData] = useState({} as any);

  const GetData = async () => {
    const AlertasRes = fetch("/api/alerta").then((res) => res.json());
    const SliderRes = fetch("/api/slider").then((res) => res.json());

    const [Alertas, Slider] = await Promise.all([AlertasRes, SliderRes]);

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
      <div className="flex flex-wrap lg:grid lg:rid-cols-1 lg:grid-cols-10 justify-center">
        <div className="grid lg:col-span-2">
          <div className="flex p-2 lg:grid gap-2 lg:col-span-2 bg-white justify-center">
            <SubMenu
              title="Talento Humano"
              img="/Directorio/iconos/iconoTalentoHumano.png"
              link="/TalentoHumano"
            />
            <SubMenu
              title="PROCESOS DE PREMATRÍCULAS Y MATRÍCULAS"
              img="/Directorio/iconos/iconosMatriculas.png"
              link="/ProcesosMatriculas"
            />
            <SubMenu
              title="Trámites y Servicios"
              img="/Directorio/iconos/iconoTramites.png"
              link="/Tramites"
            />
          </div>
        </div>

        <div className="lg:col-span-6  w-full max-h-[500px] overflow-hidden">
          {/* Center carousel */}

          {Object.keys(Data).length > 0 && Data?.Slider?.length ? (
            <Slider imageSlider={Data?.Slider} />
          ) : (
            <CompCargando />
            // <p className="text-red-900 text-center mx-auto">
            //   Las Imágenes del Slider están cargando
            // </p>
          )}
        </div>

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
              link="https://www.ensiibague.edu.co/sygescol2023/gobie_voto_ingreso.php"
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
