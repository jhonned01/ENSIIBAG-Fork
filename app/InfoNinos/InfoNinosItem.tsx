import React from "react";
import Moment from "react-moment";
import "moment/locale/es";

function InfoNinosItem({
  fecha,
  title,
  subtitle1,
  contenido,
  subtitle2,
  contenido2,
  subtitle3,
  contenido3,
  subtitle4,
}: any) {
  let NewFecha2 = fecha?.substring(0, 10);

  return (
    <>
      <div className="text-center mx-2 my-auto">
        <h1 className="font-bold text-[#003823] text-3xl">{title}</h1>
        <h1 className="text-[#005335] text-2xl font-bold">
          {subtitle1}{" "}
          <span className="text-[#006F46] font-medium">{contenido}</span>
        </h1>
        <h1 className="text-[#005335] text-2xl font-bold">
          {subtitle2}{" "}
          <span className="text-[#006F46] font-medium">{contenido2}</span>
        </h1>
        <h1 className="text-[#005335] text-2xl font-bold">
          {subtitle3}{" "}
          <span className="text-[#006F46] font-medium">{contenido3}</span>
        </h1>
        <h1 className="text-[#005335] text-2xl font-bold pb-3 lg:pb-0">
          {subtitle4}{" "}
          <span className="text-[#006F46] font-medium">
            <Moment date={NewFecha2} format="DD" /> de{" "}
            <Moment date={NewFecha2} format="MMMM" /> del{" "}
            <Moment date={NewFecha2} format="YYYY" />
          </span>
        </h1>
      </div>
    </>
  );
}

export default InfoNinosItem;
