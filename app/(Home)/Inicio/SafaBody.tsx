import React from "react";
import SubMenu from "./SubMenu";
import Slider from "./Slider";

const SafaBody = ({ imageSlider }: any) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10">
      {/* left */}
      <div className=" flex p-2 lg:grid gap-2 lg:col-span-2 bg-white ">
        <SubMenu
          title="Talento Humano"
          img="/Directorio/iconos/iconoTalentoHumano.png"
          click="/TalentoHumano"
        />
        <SubMenu
          title="PROCESOS DE PREMATRÍCULAS Y MATRÍCULAS"
          img="/Directorio/iconos/iconosMatriculas.png"
          click="/ProcesosMatriculas"
        />
        <SubMenu
          title="Trámites y Servicios"
          img="/Directorio/iconos/iconoTramites.png"
          click="/Tramites"
        />
      </div>

      <div className="lg:col-span-6 overflow-hidden">
        {/* Center carousel */}
        {imageSlider[0]?.error ? (
          <p className="text-red-900">{imageSlider[0]?.error}</p>
        ) : (
          <Slider imageSlider={imageSlider} />
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
  );
};

export default SafaBody;
