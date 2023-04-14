import React from "react";
import TitulosInternos from "../Inicio/TitulosInternos";
import TrazabilidadItem from "./TrazabilidadItem";

function Index() {
  return (
    <div>
      <TitulosInternos title="Trazabilidad con Organismos de Control" />
      <div className="py-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <TrazabilidadItem
          title="Gobierno en Linea Alcaldía Ibagué"
          enlace="http://inedomi.sistemasivhorsnet.com/ingreso_sistema.php?tipo=1"
          imgEnlacesInt="/TrazabilidadControl/AlcaldiaIbague.png"
        />
        <TrazabilidadItem
          title="Secretaría de Educación Municipal Ibagué"
          enlace="http://inedomi.sistemasivhorsnet.com/ingreso_sistema.php?tipo=2"
          imgEnlacesInt="/TrazabilidadControl/SecretariaEdu.jpg"
        />
        <TrazabilidadItem
          title="Casa de Justicia Municipal Ibagué"
          enlace="http://inedomi.sistemasivhorsnet.com/ingreso_sistema.php?tipo=3"
          imgEnlacesInt="/TrazabilidadControl/CasaJusticia.png"
        />
        <TrazabilidadItem
          title="Policía de Infancia y Adolescencia"
          enlace="http://inedomi.sistemasivhorsnet.com/ingreso_sistema.php?tipo=7"
          imgEnlacesInt="/TrazabilidadControl/policiaInfancia.png"
        />
        <TrazabilidadItem
          title="Comisaría de Familia"
          enlace="http://inedomi.sistemasivhorsnet.com/ingreso_sistema.php?tipo=6"
          imgEnlacesInt="/TrazabilidadControl/ComisariaFamilia.png"
        />
        <TrazabilidadItem
          title="Más Familias en Acción"
          enlace="http://inedomi.sistemasivhorsnet.com/ingreso_sistema.php?tipo=4"
          imgEnlacesInt="/TrazabilidadControl/FamiliasAccion.png"
        />
        <TrazabilidadItem
          title="Bienestar Familiar Ibagué"
          enlace="http://inedomi.sistemasivhorsnet.com/ingreso_sistema.php?tipo=5"
          imgEnlacesInt="/TrazabilidadControl/BienestarFamiliar.png"
        />
        <TrazabilidadItem
          title="Inspección de Policía"
          enlace="http://inedomi.sistemasivhorsnet.com/ingreso_sistema.php?tipo=8"
          imgEnlacesInt="/TrazabilidadControl/InpeccionPolicia.png"
        />
        <TrazabilidadItem
          title="Secretaría de Transporte"
          enlace="http://inedomi.sistemasivhorsnet.com/ingreso_sistema.php?tipo=9"
          imgEnlacesInt="/TrazabilidadControl/SecretariaTransporte.png"
        />
      </div>
    </div>
  );
}

export default Index;
