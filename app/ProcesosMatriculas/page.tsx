import React from "react";
import TitulosInternos from "../Inicio/TitulosInternos";
import ProtoMatriculaItem from "./ProtoMatriculaItem";

function Index() {
  return (
    <div>
      <TitulosInternos title="Procesos de Prematrículas y Matrículas" />
      <div className="px-5 py-6 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ProtoMatriculaItem
          imgMatriculas="/ProcesosMatriculas/antiguosMATRI.webp"
          title="MATRÍCULA ESTUDIANTES ANTIGUOS"
          external={true}
          link="https://prematriculas.vercel.app/Login?3"
        />
        <ProtoMatriculaItem
          imgMatriculas="/ProcesosMatriculas/nuevosMATRI.webp"
          title="MATRÍCULA ESTUDIANTES NUEVOS"
          external={true}
          link="https://prematriculas.vercel.app/Disponibilidad?3"
        />
        <ProtoMatriculaItem
          imgMatriculas="/ProcesosMatriculas/retornoMATRI.webp"
          title="RETORNO FORMULARIO INSCRIPCIÓN"
          external={true}
          link="https://prematriculas.vercel.app/LoginFormularioInscripcion/3"
        />
        <ProtoMatriculaItem
          imgMatriculas="/ProcesosMatriculas/impresionMATRI.webp"
          title="IMPRESIÓN FORMULARIO INSCRIPCIÓN Y SIMPADE"
          external={true}
          link={`https://www.ensiibague.edu.co/sygescol${new Date().getFullYear()}/Impresion_formulario.php`}
        />
      </div>
    </div>
  );
}

export default Index;
