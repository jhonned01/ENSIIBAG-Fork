import React from "react";

function TramitesItem({ numero, title }: any) {
  return (
    <>
      <h1 className="text-2xl font-bold text-[#003823]">
        <b className="text-[#005335] font-semibold">{numero}</b> {title}
      </h1>
    </>
  );
}

export default TramitesItem;
