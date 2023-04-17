"use client";
import { useEffect, useState } from "react";
import TitulosInternos from "../Inicio/TitulosInternos";
import { useRouter } from "next/navigation";

const LeyTransparencia = () => {
  const [Data, setData] = useState({} as any);

  const router = useRouter();

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

  console.log("Data", Data);

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
                <p
                  className="text-[#006F46] cursor-pointer"
                  onClick={() => router.push("/pqrs")}
                >
                  <b>
                    Formularios PQRS: Formulario Electrónico de Solicitudes,
                    Peticiones, Quejas, Reclamos, Sugerencias y Otros
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
              <p>
                <b>1.4</b> Políticas de Seguridad:
                <p
                  className="text-[#006F46] cursor-pointer"
                  onClick={() =>
                    router.push("/Items/1.4/Política de Seguridad")
                  }
                >
                  Ver Políticas
                </p>
              </p>
              <p>
                <b>1.4.1</b> Políticas de Tratamiento de la Información:
                <p
                  className="text-[#006F46] cursor-pointer"
                  onClick={() =>
                    router.push(
                      "/Items/1.4.1/Política de Tratamiento de la Información"
                    )
                  }
                >
                  Ver Política
                </p>
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
                <b
                  onClick={() =>
                    router.push("/Items/2.1/Publicación%20Datos Abiertos")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  - Ver Informacion
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.2</b> Investigaciones y Otras Publicaciones
              </p>
              <p>
                <b
                  onClick={() =>
                    router.push(
                      "/Items/2.2/Investigaciones y Otras Publicaciones"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  - Ír al publicaciones
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.3</b> Convocatorias
              </p>
              <p>
                <b
                  onClick={() => router.push("/Convocatorias")}
                  className="cursor-pointer text-[#006F46]"
                >
                  - Convocatorias
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.4</b> Preguntas y Respuestas Frecuentes
              </p>
              <p>
                <b
                  onClick={() => router.push("/PreguntasFrecuentes")}
                  className="cursor-pointer text-[#006F46]"
                >
                  - Ír al link (FAQs)
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.5</b> Glosario
              </p>
              <p>
                <b
                  onClick={() => router.push("/Glosario")}
                  className="cursor-pointer text-[#006F46]"
                >
                  - Ír al Glosario
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.6</b> Noticias
              </p>
              <p>
                <b
                  onClick={() => router.push("/Items/2.6/Noticias")}
                  className="cursor-pointer text-[#006F46]"
                >
                  - Ír a Noticias
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.7</b> Calendario de Actividades
              </p>
              <p>
                <b
                  onClick={() => router.push("/CalendarioActividades")}
                  className="cursor-pointer text-[#006F46]"
                >
                  - Ír al Calendario
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.8</b> Información para Niños, Niñas y Adolescentes
              </p>
              <p>
                <b
                  onClick={() => router.push("/InfoNinos")}
                  className="cursor-pointer text-[#006F46]"
                >
                  - Ver videos
                </b>
              </p>
            </div>

            <div>
              <p>
                <b>2.9</b> Información adicional
              </p>
              <p>
                <b
                  onClick={() =>
                    router.push("/Items/2.9/Información Adicional")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  - Ír a la Información adicional
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
                <span
                  onClick={() =>
                    router.push(
                      "/Gestiones/GestionDirectiva/HorizonteInstitucional"
                    )
                  }
                  className="cursor-pointer text-[#006F46] "
                >
                  Misión
                </span>{" "}
                Y{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Gestiones/GestionDirectiva/HorizonteInstitucional"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Visión
                </span>
                ,
                <span
                  onClick={() =>
                    router.push(
                      "/Gestiones/GestionDirectiva/HorizonteInstitucional"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Valores
                </span>
                ,{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Gestiones/GestionDirectiva/HorizonteInstitucional"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Principios
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.2</b>
                <span
                  onClick={() => router.push("/Items/3.2/Función y Deberes")}
                  className="cursor-pointer text-[#006F46]"
                >
                  Función y Deberes
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.3</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/3.3/Procesos y Procedimientos")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Procesos y procedimientos
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.4 </b>
                <span
                  onClick={() => router.push("/Items/3.4/Organigrama")}
                  className="cursor-pointer text-[#006F46]"
                >
                  Organigrama
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.5</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/3.5/Directorio de información de servicios, empleados, Contratistas"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Directorio de información de servicios, empleados
                  ,contratistas
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.6</b>
                <span
                  onClick={() =>
                    router.push("/Items/3.6/Directorio de Entidades")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  {" "}
                  Directorio de entidades
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.7</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/3.7/Directorio de agremiaciones y otros grupos de interes"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Directorio de agremiaciones y otros grupos de interes
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>3.8</b>{" "}
                <span
                  onClick={() => router.push("/OfertasEmpleo")}
                  className="cursor-pointer text-[#006F46]"
                >
                  Ofertas de empleo
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
                <span
                  onClick={() =>
                    router.push(
                      "/Items/4.1.1/DECRETO ÚNICO REGLAMENTARIO SECTORIAL"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  DECRETO ÚNICO REGLAMENTARIO SECTORIAL
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.2.</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/4.1.2/Decretos no compilados")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Decretos no compilados
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.3.</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/4.1.3/Decreto unico sectorial")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Decreto unico sectorial
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.4.</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/4.1.4/DECRETO ÚNICO REGLAMENTARIO SECTORIAL"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  DECRETO ÚNICO REGLAMENTARIO SECTORIAL
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.5.</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/4.1.5/Adiciones, Modificaciones y Derograciones D.U.R.S."
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Adiciones, Modificaciones y Derograciones D.U.R.S.
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.6.</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/4.1.6/Sistema Único de Información Normativa"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  SUIN: Sistema Único de Información Normativa
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>4.1.7.</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/4.1.7/Consulta de Publicaciones de resoluciones y circulares"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  {" "}
                  Consulta de Publicaciones de resoluciones y circulares
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
                <span
                  onClick={() => router.push("/Items/5.1/PRESUPUESTO GENERAL")}
                  className="cursor-pointer text-[#006F46]"
                >
                  PRESUPUESTO GENERAL
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>5.2</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/5.2/EJECUCIÓN PRESUPUESTAL")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  EJECUCIÓN PRESUPUESTAL
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>5.3</b>{" "}
                <span
                  onClick={() => router.push("/Items/5.3/ESTADOS FINANCIEROS")}
                  className="cursor-pointer text-[#006F46]"
                >
                  ESTADOS FINANCIEROS
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>5.4</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/5.4/Ejecución Recursos de Gratuidad")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Ejecución Recursos de Gratuidad
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
                <span
                  onClick={() =>
                    router.push("/Items/6.1/Políticas, lineamientos y manuales")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Políticas, lineamientos y manuales
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>6.2</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/6.2/Plan del Gasto Público")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Plan del Gasto Público
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>6.3</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/6.3/Programas y proyectos en Ejecución")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Programas y proyectos en Ejecución
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>6.4</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/6.4/Metas, objetivos e indicadores de gestión y desempeño"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  {" "}
                  Metas, objetivos e indicadores de gestión y desempeño
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>6.5</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/6.5/Participación en la formulación de Políticas"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Participación en la formulación de Políticas
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>6.6</b>{" "}
                <span
                  onClick={() => router.push("/Items/6.6/Informes de Empalme")}
                  className="cursor-pointer text-[#006F46]"
                >
                  Informes de Empalme
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
                <span
                  onClick={() =>
                    router.push(
                      "/Items/7.1/Informes de Gestión Evaluación y Auditoría"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Informes de Gestión Evaluación y Auditoría
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.1.1</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/7.1.1/Informe enviado al Congreso, Asamblea y Consejo"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Informe enviado al Congreso, Asamblea y Consejo
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.1.2</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/7.1.2/Informe de Rendicion de cuenta Fiscal a la Contraloría General"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Informe de Rendicion de cuenta Fiscal a la Contraloría General
                  o a los organismos de control
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.1.3</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/7.1.3/Informe de Rendicion de cuenta a los ciudadanos"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Informe de Rendicion de cuenta a los ciudadanos
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.1.4</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/7.1.4/Informes de organismos de Inspección, Vigilancia y Control"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Informes de organismos de Inspección, Vigilancia y Control
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.2</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/7.2/Reportes de Control Interno")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Reportes de Control Interno
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.3</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/7.3/Planes de mejoramiento")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Planes de mejoramiento
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
                <span
                  onClick={() =>
                    router.push(
                      "/Items/7.5/Información para población vulnerable"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Información para población vulnerable
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>7.6</b>{" "}
                <span
                  onClick={() => router.push("/Items/7.6/Defensa Judicial")}
                  className="cursor-pointer text-[#006F46]"
                >
                  Defensa Judicial
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
                <span
                  onClick={() =>
                    router.push(
                      "/Items/8.1/Publicación de la información Contractual"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Publicación de la información Contractual
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
                <span
                  onClick={() =>
                    router.push(
                      "/Items/8.2/Publicación de la ejecución de contratos"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Publicación de la ejecución de contratos
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>8.3</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/8.3/Publicación de procedimientos, lineamientos y política en materia de adquisición y compra"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Publicación de procedimientos, lineamientos y política en
                  materia de adquisición y compra
                </span>
              </p>
            </div>
            <div>
              <p>
                <b>8.4</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/8.4/Publicación del plan anual de adquisiciones"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Publicación del plan anual de adquisiciones
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
                <span
                  onClick={() =>
                    router.push("/Items/9.1/Procesos de Matrículas")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Procesos de Matrículas
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>9.2 </b>
                <span
                  onClick={() =>
                    router.push("/Items/9.2/Procesos de Pre-matrículas")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Procesos de Pre-matrículas
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>9.3 </b>
                <span
                  onClick={() =>
                    router.push(
                      "/Items/9.3/Cronograma de actividades curriculares y extracurriculares"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Cronograma de actividades curriculares y extracurriculares
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
                <span
                  onClick={() =>
                    router.push(
                      "/Items/10.1/Descripción de Estructura Orgánica, Funciones y deberes"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Descripción de Estructura Orgánica, Funciones y deberes
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.2</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/10.2/Registros Activos de Información")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Registros Activos de Información
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.3</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/10.3/Índice de Información clasificada y Reservada"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Índice de Información clasificada y Reservada
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.4</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/10.4/Esquema de Publicación de Información"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Esquema de Publicación de Información
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.5</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/10.5/Programa de Gestion Documental")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Programa de Gestión Documental
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.6</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/10.6/Contratos de prestación de servicios públicos personal natural"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Contratos de prestación de servicios públicos personal natural
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.7</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/10.7/Registros de Publicaciones")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Registros de Publicaciones
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.8</b>{" "}
                <span
                  onClick={() =>
                    router.push("/Items/10.8/Costos de Producción")
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Costos de Producción
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.9</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/10.9/Mecanismos de Quejas,Reclamos en Relacion con Omisiones del Sujeto Obligado"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Mecanismos de Quejas,Reclamos en Relacion con Omisiones del
                  Sujeto Obligado
                </span>
              </p>
            </div>

            <div>
              <p>
                <b>10.10</b>{" "}
                <span
                  onClick={() =>
                    router.push(
                      "/Items/10.10/Informe de Peticiones, Quejas, Reclamos, Denuncias y Solicitudes"
                    )
                  }
                  className="cursor-pointer text-[#006F46]"
                >
                  Informe de Peticiones, Quejas, Reclamos, Denuncias y
                  Solicitudes
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
