"use client";
import { useEffect, useState } from "react";
import TitulosInternos from "../Inicio/TitulosInternos";
import Link from "next/link";

const LeyTransparencia = () => {
  const [Data, setData] = useState({} as any);

  useEffect(() => {
    const GetData = async () => {
      const Info = await fetch(`/api/LeyTransparencia`).then((res) =>
        res.json()
      );

      // leyTransparenciaSedes
      setData(Info);
    };
    GetData();
  }, []);

  return (
    <>
      <TitulosInternos title="Transferencia y Acceso a la Información Pública" />

      <div className="p-4 text-center mx-auto my-6 w-full lg:max-w-5xl drop-shadow rounded-md">
        <details className="bg-[#006F46] open:bg-[#005335] duration-300">
          <summary className="text-white font-bold bg-inherit px-5 py-3 text-xl cursor-pointer">
            <b>1.</b> Atención al Usuario
          </summary>
          <div className="bg-white font-medium px-5 py-3 border border-gray-300 text-lg space-y-2">
            <div>
              <p>
                <b>1.1</b> Atención al ciudadano
              </p>
              <p>
                <b>1.1.1</b> Ubicación física de la Institución
              </p>
              <p>
                Dirección Sede Principal:
                <a
                  className="text-[#006F46] cursor-inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Object.keys(Data).length > 0 &&
                    Data?.leyTransparenciaSedes[0]?.direccion}
                </a>
              </p>
            </div>

            <div>
              <p>
                <b>1.1.2</b> Números telefónicos de Contacto
                <p>
                  Teléfonos:
                  <a
                    className="text-[#006F46]"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`tel: ${
                      Object.keys(Data).length > 0 &&
                      Data?.leyTransparenciaSedes[0]?.telefonos
                    }`}
                  >
                    {" "}
                    {Object.keys(Data).length > 0 &&
                      Data?.leyTransparenciaSedes[0]?.telefonos}
                  </a>
                </p>
              </p>
            </div>

            <div>
              <p>
                <b>1.1.3</b> Correo electrónico institucional
              </p>
              <p>
                <b>E-mail:</b>
                <a
                  className="text-[#006F46]"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto: ${
                    Object.keys(Data).length > 0 &&
                    Data?.leyTransparenciaSedes[0].correo
                  }`}
                >
                  {" "}
                  {Object.keys(Data).length > 0 &&
                    Data?.leyTransparenciaSedes[0].correo}
                </a>
              </p>
            </div>

            <div>
              <p>
                <b>1.1.4</b> Correo físico o Postal
              </p>
              <p>
                <b>Código Postal:</b>{" "}
                {Object.keys(Data).length > 0 &&
                  Data?.leyTransparenciaSedes[0].postal}
              </p>
            </div>

            <div>
              <p>
                <b>1.1.5</b> Link para acceder a: Felicitaciones, Peticiones,
                Sugerencias, Reclamos, Quejas y Denuncias-PQRSDF
              </p>
              <p>
                <p className="text-[#006F46] cursor-pointer">
                  <b>
                    <Link href={"/pqrs"}>
                      Formularios PQRS: Formulario Electrónico de Solicitudes,
                      Peticiones, Quejas, Reclamos, Sugerencias y Otros
                    </Link>
                  </b>
                </p>
              </p>
            </div>
            <div>
              <p>
                <b>1.2</b> Localización física de la sede principal y todas las
                demás sedes.
              </p>
              <p>
                <b>1.2.1</b> Ubicación física de la sedes
                {Object?.keys(Data)?.length > 0 &&
                  Data?.leyTransparenciaSedes?.map((sede: any) => {
                    if (sede.principal == 1) {
                      return (
                        <>
                          <p>
                            Dirección Sede Principal <b>({sede.nombre})</b>:{" "}
                            {sede.direccion}
                          </p>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <p>
                            Dirección Sede Alterna <b>({sede.nombre})</b>:{" "}
                            {sede.direccion}
                          </p>
                        </>
                      );
                    }
                  })}
              </p>
            </div>

            <div>
              <p>
                <b>1.2.2</b> Horarios y días de atención al público
              </p>
              {Object.keys(Data).length > 0 &&
                Data?.leyTransparenciaSedes?.map((sede: any) => {
                  if (sede.principal == 1) {
                    return (
                      <>
                        <p className="pb-2">
                          Horarios y Puntos de Atención Sede Principal{" "}
                          <b>({sede.nombre})</b>:
                          <span className="flex flex-col">
                            <b>Dirección:</b> {sede.direccion}
                            <b>Horario:</b> {sede.horarios}
                          </span>
                        </p>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <p className="pb-2">
                          Horarios y Puntos de Atención Sede Alterna{" "}
                          <b>({sede.nombre})</b>:
                          <span className="flex flex-col">
                            <b>Dirección:</b> {sede.direccion}
                            <b>Horario:</b> {sede.horarios}
                          </span>
                        </p>
                      </>
                    );
                  }
                })}
            </div>

            <div>
              <b>1.4</b> Políticas de Seguridad:
              <p>
                <Link
                  href={"/Items/1.4/Política de Seguridad"}
                  className="text-[#006F46] cursor-pointer"
                >
                  Ver Políticas
                </Link>
              </p>
              <b>1.4.1</b> Políticas de Tratamiento de la Información:
              <p>
                <Link
                  href={
                    "/Items/1.4.1/Política de Tratamiento de la Información"
                  }
                  className="text-[#006F46] cursor-pointer"
                >
                  Ver Política
                </Link>
              </p>
            </div>
          </div>
        </details>
        <details className="bg-[#006F46] open:bg-[#005335] duration-300">
          <summary className="text-white font-bold bg-inherit px-5 py-3 text-xl cursor-pointer">
            <b>2.</b> Información de Interés
          </summary>
          <div className="bg-white font-medium px-5 py-3 border border-gray-300 text-lg">
            <div>
              <p>
                <b>2.1</b> Publicación de Datos Abiertos
              </p>
              <p>
                <b className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/2.1/Publicación%20Datos Abiertos"}>
                    - Ver Informacion
                  </Link>
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.2</b> Investigaciones y Otras Publicaciones
              </p>
              <p>
                <b className="cursor-pointer text-[#006F46]">
                  <Link
                    href={"/Items/2.2/Investigaciones y Otras Publicaciones"}
                  >
                    - Ír al publicaciones
                  </Link>
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.3</b> Convocatorias
              </p>
              <p>
                <b className="cursor-pointer text-[#006F46]">
                  <Link href={"/Convocatorias"}>- Convocatorias</Link>
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.4</b> Preguntas y Respuestas Frecuentes
              </p>
              <p>
                <b className="cursor-pointer text-[#006F46]">
                  <Link href={"/PreguntasFrecuentes"}>- Ír al link (FAQs)</Link>
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.5</b> Glosario
              </p>
              <p>
                <b className="cursor-pointer text-[#006F46]">
                  <Link href={"/Glosario"}>- Ír al Glosario</Link>
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.6</b> Noticias
              </p>
              <p>
                <b className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/2.6/Noticias"}>- Ír a Noticias</Link>
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.7</b> Calendario de Actividades
              </p>
              <p>
                <b className="cursor-pointer text-[#006F46]">
                  <Link href={"/CalendarioActividades"}>
                    - Ír al Calendario
                  </Link>
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.8</b> Información para Niños, Niñas y Adolescentes
              </p>
              <p>
                <b className="cursor-pointer text-[#006F46]">
                  <Link href={"/InfoNinos"}>- Ver videos</Link>
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.9</b> Información adicional
              </p>
              <p>
                <b className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/2.9/Información Adicional"}>
                    - Ír a la Información adicional
                  </Link>
                </b>
              </p>
            </div>
          </div>
        </details>
        <details className="bg-[#006F46] open:bg-[#005335] duration-300">
          <summary className="text-white font-bold bg-inherit px-5 py-3 text-xl cursor-pointer ">
            <b>3.</b> Estructura Orgánica y Talento Humano
          </summary>
          <div className="bg-white space-y-2 font-medium px-5 py-3 border border-gray-300 text-lg ">
            <div>
              <p>
                <b>3.1</b>{" "}
                <span className="cursor-pointer text-[#006F46] ">
                  <Link
                    href={"/Gestiones/GestionDirectiva/HorizonteInstitucional"}
                  >
                    Misión{" "}
                  </Link>
                </span>{" "}
                Y{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={"/Gestiones/GestionDirectiva/HorizonteInstitucional"}
                  >
                    Visión
                  </Link>
                </span>
                ,
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={"/Gestiones/GestionDirectiva/HorizonteInstitucional"}
                  >
                    Valores
                  </Link>
                </span>
                ,{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={"/Gestiones/GestionDirectiva/HorizonteInstitucional"}
                  >
                    Principios
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.2</b>
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/3.2/Función y Deberes"}>
                    Función y Deberes
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.3</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/3.3/Procesos y Procedimientos"}>
                    Procesos y procedimientos
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.4 </b>
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/3.4/Organigrama"}>Organigrama</Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.5</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/3.5/Directorio de información de servicios, empleados, Contratistas"
                    }
                  >
                    Directorio de información de servicios, empleados
                    ,contratistas
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.6</b>
                <span className="cursor-pointer text-[#006F46]">
                  {" "}
                  <Link href={"/Items/3.6/Directorio de Entidades"}>
                    Directorio de entidades
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.7</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/3.7/Directorio de agremiaciones y otros grupos de interes"
                    }
                  >
                    Directorio de agremiaciones y otros grupos de interes
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.8</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/OfertasEmpleo"}>Ofertas de empleo</Link>
                </span>
              </p>
            </div>
          </div>
        </details>
        <details className="bg-[#006F46] open:bg-[#005335]  duration-300">
          <summary className=" text-white font-bold bg-inherit px-5 py-3 text-xl cursor-pointer">
            <b>4.</b> Normatividad
          </summary>
          <div className="open:hidden cursor-pointer space-y-2 bg-white font-medium px-5 py-3 border border-gray-300 text-lg">
            <div>
              <p>
                <b>4.1</b> Sujetos obligados del orden nacional
              </p>
            </div>

            <div>
              <p>
                <b>4.1.1.</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={"/Items/4.1.1/DECRETO ÚNICO REGLAMENTARIO SECTORIAL"}
                  >
                    DECRETO ÚNICO REGLAMENTARIO SECTORIAL
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.2.</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/4.1.2/Decretos no compilados"}>
                    Decretos no compilados
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.3.</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/4.1.3/Decreto unico sectorial"}>
                    Decreto unico sectorial
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.4.</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={"/Items/4.1.4/DECRETO ÚNICO REGLAMENTARIO SECTORIAL"}
                  >
                    DECRETO ÚNICO REGLAMENTARIO SECTORIAL
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.5.</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/4.1.5/Adiciones, Modificaciones y Derograciones D.U.R.S."
                    }
                  >
                    Adiciones, Modificaciones y Derograciones D.U.R.S.
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.6.</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={"/Items/4.1.6/Sistema Único de Información Normativa"}
                  >
                    SUIN: Sistema Único de Información Normativa
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.7.</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  {" "}
                  <Link
                    href={
                      "/Items/4.1.7/Consulta de Publicaciones de resoluciones y circulares"
                    }
                  >
                    Consulta de Publicaciones de resoluciones y circulares
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </details>
        <details className="bg-[#006F46] open:bg-[#005335]  duration-300">
          <summary className=" text-white font-bold bg-inherit px-5 py-3 text-xl cursor-pointer">
            <b>5.</b> Presupuesto
          </summary>
          <div className="open:hidden cursor-pointer space-y-2 bg-white font-medium px-5 py-3 border border-gray-300 text-lg">
            <div>
              <p>
                <b>5.1</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/5.1/PRESUPUESTO GENERAL"}>
                    PRESUPUESTO GENERAL
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>5.2</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/5.2/EJECUCIÓN PRESUPUESTAL"}>
                    EJECUCIÓN PRESUPUESTAL
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>5.3</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/5.3/ESTADOS FINANCIEROS"}>
                    ESTADOS FINANCIEROS
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>5.4</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/5.4/Ejecución Recursos de Gratuidad"}>
                    Ejecución Recursos de Gratuidad
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </details>
        <details className="bg-[#006F46] cursor-pointer open:bg-[#005335]  duration-300">
          <summary className=" text-white font-bold bg-inherit px-5 py-3 text-xl cursor-pointer">
            <b>6.</b> Planeación
          </summary>
          <div className="open:hidden cursor-pointer space-y-2 bg-white font-medium px-5 py-3 border border-gray-300 text-lg">
            <div>
              <p>
                <b>6.1</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/6.1/Políticas, lineamientos y manuales"}>
                    Políticas, lineamientos y manuales
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>6.2</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/6.2/Plan del Gasto Público"}>
                    Plan del Gasto Público
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>6.3</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/6.3/Programas y proyectos en Ejecución"}>
                    Programas y proyectos en Ejecución
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>6.4</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  {" "}
                  <Link
                    href={
                      "/Items/6.4/Metas, objetivos e indicadores de gestión y desempeño"
                    }
                  >
                    Metas, objetivos e indicadores de gestión y desempeño
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>6.5</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/6.5/Participación en la formulación de Políticas"
                    }
                  >
                    Participación en la formulación de Políticas
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>6.6</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/6.6/Informes de Empalme"}>
                    Informes de Empalme
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </details>
        <details className="bg-[#006F46] open:bg-[#005335]  duration-300">
          <summary className=" text-white font-bold bg-inherit px-5 py-3 text-xl cursor-pointer">
            <b>7.</b> Control
          </summary>
          <div className="open:hidden cursor-pointer space-y-2 bg-white font-medium px-5 py-3 border border-gray-300 text-lg">
            <div>
              <p>
                <b>7.1</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/7.1/Informes de Gestión Evaluación y Auditoría"
                    }
                  >
                    Informes de Gestión Evaluación y Auditoría
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.1.1</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/7.1.1/Informe enviado al Congreso, Asamblea y Consejo"
                    }
                  >
                    Informe enviado al Congreso, Asamblea y Consejo
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.1.2</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/7.1.2/Informe de Rendicion de cuenta Fiscal a la Contraloría General"
                    }
                  >
                    Informe de Rendicion de cuenta Fiscal a la Contraloría
                    General o a los organismos de control
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.1.3</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/7.1.3/Informe de Rendicion de cuenta a los ciudadanos"
                    }
                  >
                    Informe de Rendicion de cuenta a los ciudadanos
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.1.4</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/7.1.4/Informes de organismos de Inspección, Vigilancia y Control"
                    }
                  >
                    Informes de organismos de Inspección, Vigilancia y Control
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.2</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/7.2/Reportes de Control Interno"}>
                    Reportes de Control Interno
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.3</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/7.3/Planes de mejoramiento"}>
                    Planes de mejoramiento
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.4</b> Entes de control que vigilan
              </p>
              <p className="text-[#006F46]">
                <a href="https://www.contraloria.gov.co">
                  <b>Pagina web Contraloría</b>
                </a>
              </p>
              <p>
                <a href="mailto: cgr@contraloria.gov.co">
                  Correo electrónico:<b> cgr@contraloria.gov.co</b>
                </a>
              </p>
              <p className="text-[#006F46]">
                <a href="https://www.procuraduria.gov.co">
                  <b>Pagina web Procuraduría</b>
                </a>
              </p>
              <p>
                <a href="mailto: quejas@procuraduria.gov.co">
                  Correo electrónico:<b> quejas@procuraduria.gov.co</b>
                </a>
              </p>
              <p className="text-[#006F46]">
                <a href="https://www.contaduria.gov.co">
                  <b>Pagina web Contaduria</b>
                </a>
              </p>
              <p>
                <a href="mailto: contactenos@contaduria.gov.co">
                  Correo electrónico:<b> contactenos@contaduria.gov.co</b>
                </a>
              </p>
              <p className="text-[#006F46]">
                <a href="https://www.archivogeneral.gov.co/">
                  <b>Pagina web archivo General</b>
                </a>
              </p>
              <p>
                <a href="mailto: contacto@archivogeneral.gov.co">
                  Correo electrónico:<b> contacto@archivogeneral.gov.co</b>
                </a>
              </p>
              <p className="text-[#006F46]">
                <a href="https://www.funcionpublica.gov.co">
                  <b>Pagina web Funcion publica</b>
                </a>
              </p>
              <p>
                <a href="https://www.funcionpublica.gov.co/ciudadano">
                  Enlace directo atención al ciudadano:
                  <b className="text-[#006F46]">
                    {" "}
                    https://www.funcionpublica.gov.co/ciudadano
                  </b>
                </a>
              </p>
            </div>

            <div>
              <p>
                <b>7.5</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={"/Items/7.5/Información para población vulnerable"}
                  >
                    Información para población vulnerable
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.6</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/7.6/Defensa Judicial"}>
                    Defensa Judicial
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </details>
        <details className="bg-[#006F46] open:bg-[#005335]  duration-300">
          <summary className=" text-white font-bold bg-inherit px-5 py-3 text-xl cursor-pointer">
            <b>8.</b> Contratación
          </summary>
          <div className="open:hidden cursor-pointer space-y-2 bg-white font-medium px-5 py-3 border border-gray-300 text-lg">
            <div>
              <p>
                <b>8.1</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/8.1/Publicación de la información Contractual"
                    }
                  >
                    Publicación de la información Contractual
                  </Link>
                </span>
              </p>
              <p className="text-[#006F46]">
                <a href="https://www.contratos.gov.co/consultas/inicioConsulta.do">
                  <b>SECOP I</b>
                </a>
              </p>
              <p className="text-[#006F46]">
                <a href="https://www.colombiacompra.gov.co/secop/consulte-en-el-secop-ii">
                  <b>SECOP II</b>
                </a>
              </p>
            </div>

            <div>
              <p>
                <b>8.2</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={"/Items/8.2/Publicación de la ejecución de contratos"}
                  >
                    Publicación de la ejecución de contratos
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>8.3</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/8.3/Publicación de procedimientos, lineamientos y política en materia de adquisición y compra"
                    }
                  >
                    Publicación de procedimientos, lineamientos y política en
                    materia de adquisición y compra
                  </Link>
                </span>
              </p>
            </div>
            <div>
              <p>
                <b>8.4</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/8.4/Publicación del plan anual de adquisiciones"
                    }
                  >
                    Publicación del plan anual de adquisiciones
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </details>
        <details className="bg-[#006F46] open:bg-[#005335]  duration-300">
          <summary className=" text-white font-bold bg-inherit px-5 py-3 text-xl cursor-pointer">
            <b>9.</b> Trámites y Servicios
          </summary>
          <div className="open:hidden cursor-pointer bg-white font-medium px-5 py-3 border border-gray-300 text-lg">
            <div>
              <p>
                <b>9.1 </b>
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/9.1/Procesos de Matrículas"}>
                    Procesos de Matrículas
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>9.2 </b>
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/9.2/Procesos de Pre-matrículas"}>
                    Procesos de Pre-matrículas
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>9.3 </b>
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/9.3/Cronograma de actividades curriculares y extracurriculares"
                    }
                  >
                    Cronograma de actividades curriculares y extracurriculares
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </details>
        <details className="bg-[#006F46] open:bg-[#005335]  duration-300">
          <summary className=" text-white font-bold bg-inherit px-5 py-3 text-xl cursor-pointer">
            <b>10.</b> Instrumentos de Gestión de Información pública
          </summary>
          <div className="open:hidden space-y-2 cursor-pointer bg-white font-medium px-5 py-3 border border-gray-300 text-lg">
            <div>
              <p>
                <b>10.1</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/10.1/Descripción de Estructura Orgánica, Funciones y deberes"
                    }
                  >
                    Descripción de Estructura Orgánica, Funciones y deberes
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.2</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/10.2/Registros Activos de Información"}>
                    Registros Activos de Información
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.3</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/10.3/Índice de Información clasificada y Reservada"
                    }
                  >
                    Índice de Información clasificada y Reservada
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.4</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={"/Items/10.4/Esquema de Publicación de Información"}
                  >
                    Esquema de Publicación de Información
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.5</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/10.5/Programa de Gestion Documental"}>
                    Programa de Gestión Documental
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.6</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/10.6/Contratos de prestación de servicios públicos personal natural"
                    }
                  >
                    Contratos de prestación de servicios públicos personal
                    natural
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.7</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/10.7/Registros de Publicaciones"}>
                    Registros de Publicaciones
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.8</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link href={"/Items/10.8/Costos de Producción"}>
                    Costos de Producción
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.9</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/10.9/Mecanismos de Quejas,Reclamos en Relacion con Omisiones del Sujeto Obligado"
                    }
                  >
                    Mecanismos de Quejas,Reclamos en Relacion con Omisiones del
                    Sujeto Obligado
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.10</b>{" "}
                <span className="cursor-pointer text-[#006F46]">
                  <Link
                    href={
                      "/Items/10.10/Informe de Peticiones, Quejas, Reclamos, Denuncias y Solicitudes"
                    }
                  >
                    Informe de Peticiones, Quejas, Reclamos, Denuncias y
                    Solicitudes
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </details>
      </div>
    </>
  );
};

export default LeyTransparencia;
